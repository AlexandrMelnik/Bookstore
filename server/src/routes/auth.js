import express from 'express';
import User from '../sequelize';
import { config } from '../../configServer';
import md5 from 'md5';

const router = express.Router();

router.post('/', (req, res) => {
  const { credentials } = req.body;
  User.findOne({ where: { email: credentials.email } })
    .then(user => {
      if(user.password === md5(credentials.password+config.secretHash)) {
        res.json({ user: { email: user.email, token: user.token } });
      } else {
        res.status(400).json({ errors: { global: "You entered an incorrect password" } });
      }
    })
    .catch(err => {
      res.status(400).json({ errors: { global: "Email not found" } });
    })
});

export default router;
