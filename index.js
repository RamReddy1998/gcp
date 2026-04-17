const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // Cloud Run expects this

app.get('/', (req, res) => {
  res.send('Hello from Cloud Run! 🚀');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
