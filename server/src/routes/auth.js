import express from 'express';
import dotenv from 'dotenv';
import User from '../sequelize';
import { jwtModel }  from '../models/jwtModel';
import md5 from 'md5';

dotenv.config();
const router = express.Router();

router.post('/', (req, res) => {
  const { credentials } = req.body;
  User.findOne({ where: { email: credentials.email } })
    .then(user => {
      if(user.password === md5(credentials.password+process.env.SECRET_KEY)) {
        const generateJWT = jwtModel(user);
        res.json({ user: { email: user.email, token: generateJWT, confirm: user.confirm } });
      } else {
        res.status(400).json({ errors: { global: "You entered an incorrect password" } });
      }
    })
    .catch(err => {
      res.status(400).json({ errors: { global: "Email not found" } });
    })
});

router.post('/confirm', (req, res) => {
  const token = req.body.token;
  User.findOne({ where : {token: token}})
    .then(user => {
      return user.update({confirm: 1, token: ""})
    })
    .then(user => {
      const generateJWT = jwtModel(user);
      res.json({ user: { email: user.email, token: generateJWT } });
    }).catch(err => res.status(400).json({}))
});

export default router;
