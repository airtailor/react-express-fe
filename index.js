const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('build'));
app.use(bodyParser.json());

const PORT = process.env.port || 8080;

app.use(require('./router'));

app.listen(PORT, () => {
  console.log('alive on port', PORT)
});

