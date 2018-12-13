var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var path = require('path');
var fs = require('fs')
var index = path.join(__dirname + '/client/index.html')
var html = '<form action="/input"  method="POST"> <input type="file" id="csvFile" name="string" accept=".csv"/><br><input type="Submit" value="Submit"/></form>'

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('client'))


const convert=(obj , result)=>{
    const conv = []
    for(var key in obj){
        if(key != "children"){
            conv.push(obj[key])
        }else{
            result.push(conv)
            obj[key].forEach((obj1)=>{
                convert(obj1, result)
            })
        }
    }
    return result
}


app.post('/input', function(req, res){
    // console.log(req)
    
    // var result = [];
    // console.log(req)
    // const obj =  (req.body.string)
    // const parsed = JSON.parse(obj)
    // const keyed = Object.keys(parsed)
    // result.push(keyed)
    // const final = convert(parsed, result)
    // const csv = final.join('<br>')
    // res.set('Content-Type', 'text/html')
    // res.send('<div>'+ csv + '</div>' + html)
    res.send(req)

})



app.listen(8080);