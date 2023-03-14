const express = require('express');
const db = require('./config/dbConnect');

const app = express();
const port = 8000;


app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
