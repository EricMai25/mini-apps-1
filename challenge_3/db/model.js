const db = require('./sql.js')

const addToDB =(req, res)=>{
    console.log(req)
    res.end(req.body)   



}

module.exports = {
    addToDB
}   