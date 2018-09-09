import express from 'express';
import path from 'path';
import auth from './routes/auth';
import users from './routes/users';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(bodyParser.json());

app.use('/api/auth', auth);
app.use('/api/users', users);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.SERVER_PORT, () => console.log('Runing server on port ', process.env.SERVER_PORT));
