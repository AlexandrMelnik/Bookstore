import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const jwtModel = data =>
 jwt.sign({
      email: data.email,
      confirm: data.confirm
    },
    process.env.SECRET_KEY
  );
