const express = require('express');
const app = express();

app.use(express.static('build'));

const PORT = process.env.port || 8080;

app.use(require('./router'));

app.listen(PORT, () => {
  console.log('alive on port', PORT)
});

