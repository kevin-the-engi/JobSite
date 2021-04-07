const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.static('client/dist'));
app.use(express.json());

app.listen(6000, () => {
  console.log('Client server listening on 6000');
});
