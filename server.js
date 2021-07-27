
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Api works!')
})

app.listen(3003, function () {
  console.log('app listening on port 3003')
})
