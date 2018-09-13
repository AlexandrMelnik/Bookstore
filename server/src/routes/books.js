import express from 'express';
import dotenv from 'dotenv';
import { Books } from '../sequelize';

dotenv.config();
const router = express.Router();

router.get('/get_all', (req, res) => {
  Books.findAll()
   .then(books => {
     if(books) {
      res.json({books});
     } else {
       res.status(400).json({})
     }
   })
   .catch(err => res.status(400).json({}));
});

export default router;
