const express = require('express');

const app = express();
const routeLogin = require('./routes/login');

const port = 5000;

app.use('/', routeLogin);

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`server has lisned at port ${port}`);
  }
});
