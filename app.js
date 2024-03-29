const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express Server!');
});

app.listen(port, () => {
  console.log(`Express server is running at http://localhost:${port}`);
});
