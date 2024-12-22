// orders-service/app.js

import express from 'express';
import { jwtMiddleware } from '@harshbhama/auth-repo-git';
const app = express();
const port = 3000;

app.use(express.json());

app.use(jwtMiddleware);

app.get('/queue', (req, res) => {
  console.log('Queue service 1:');
  res.send({ message: 'Queue service 1 aa' });
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Queue service 1 aa is running on port with jwt from package ${port}`);
});