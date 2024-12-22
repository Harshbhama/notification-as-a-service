// suppliers-service/app.js
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/queue', (req, res) => {
  console.log('Queue service 2:');
  res.send({ message: 'Queue service 2' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Queue service 2 is running on ${port}`);
});
