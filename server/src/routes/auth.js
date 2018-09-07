import express from 'express';
import User from '../sequelize';

const router = express.Router();

router.post('/', (req, res) => {
  const { credentials } = req.body;
  User.findOne({ where: { email: credentials.email } })
    .then(users => console.log(users.id))
    .catch(err => { console.error('Error requesting') })
  res.status(400).json({ errors: {global: "Invalid credentials"} });
});

export default router;
