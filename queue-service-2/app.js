// suppliers-service/app.js
import express from 'express';
import { jwtMiddleware } from '@harshbhama/auth-repo-git';
import { signToken } from '@harshbhama/auth-repo-git';
const app = express();
const port = 3001;

app.use(express.json());

app.get('/sign-token', (req, res) => {
  let token = signToken({});
  res.send({token: token});
})

app.use(jwtMiddleware);

app.get('/queue', (req, res) => {
  console.log('Queue service 2:');
  res.send({ message: 'Queue service 2' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Queue service 2 is running on ${port}`);
});
