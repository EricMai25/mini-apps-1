const express = require('express')
const app = express()
const path = require('path');
const index = path.join(__dirname + 'public/index.html');

app.use(express.static('public'))


app.listen(8080)