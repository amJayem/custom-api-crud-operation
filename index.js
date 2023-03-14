const express = require('express');
const db = require('./config/dbConnect');
const routes = require('./routes/routes')

const app = express();
const port = 8000;

app.use('/',routes);
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
