import express from 'express';
import User from '../sequelize';
import { config } from '../../configServer';
import md5 from 'md5';

const router = express.Router();

router.post('/', (req, res) => {
  const { username, email, password } = req.body.user;
  User.findOne({ where: { email: email } })
   .then(user => {
     if(user) {
       res.status(400).json({ errors: { global: "That email is already taken" } });
     } else {
       const genereteToken = md5(password+email+config.secretHash);
       const generetePassword = md5(password+config.secretHash);
       const data = {
         username: username,
         email: email,
         password: generetePassword,
         token: genereteToken
       };

       User.create(data).then((newUser, created) =>  {
         res.json({ user: { email: newUser.email, token: newUser.token } });
         console.log(newUser.email);
       });
     }
   })
});

export default router;
