import express from 'express';
import dotenv from 'dotenv';
import User from '../sequelize';
import { sendConfirmEmail } from '../mailer';
import md5 from 'md5';

dotenv.config();
const router = express.Router();

router.post('/', (req, res) => {
  const { username, email, password } = req.body.user;
  User.findOne({ where: { email: email } })
   .then(user => {
     if(user) {
       res.status(400).json({ errors: { global: "That email is already taken" } });
     } else {
       const genereteToken = md5(password+email+process.env.SECRET_KEY);
       const generetePassword = md5(password+process.env.SECRET_KEY);
       const data = {
         username: username,
         email: email,
         password: generetePassword,
         token: genereteToken
       };
       User.create(data).then((newUser, created) =>  {
         res.json({ user: { email: newUser.email, token: newUser.token } });
         sendConfirmEmail({email: newUser.email, username: newUser.username, generateUrl: `http://localhost:3000/confirm/${genereteToken}`});
       });
     }
   })
});

export default router;
