const express = require ('express')
const app = express();
const bodyparser = require('body-parser')
const port = 8080

app.use(express.static('public'))
app.use(bodyparser.json())








app.listen(port,()=>{
    console.log('It is Alive at port ' + port )
})

