const express = require('express')
const app = express()
const path = require('path');
const index = path.join(__dirname + 'public/index.html');
const addTo = require('./db/model.js')
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('public'))

app.post('/purchased', (req ,res)=>{
    console.log(req.body, 'hi')
    res.end()
    // req.on('data', (data)=>{

        
    //     console.log(JSON.parse(data) , 'hello')
    //     res.end()

    // })
})

app.listen(8080)