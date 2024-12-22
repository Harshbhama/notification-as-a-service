// orders-service/app.js
const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

app.get('/queue', (req, res) => {
  console.log('Queue service 3:');
  res.send({ message: 'Queue service 3' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Queue sercice 3 is listening on port ${port}`);
});
