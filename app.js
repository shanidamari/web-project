const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  console.log("here")
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
module.exports=app;