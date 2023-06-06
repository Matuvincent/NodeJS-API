const express = require('express')
const app = express()

//routes

app.get('/', function (req, res) {
    res.send('Hello world how are you')      
})

app.listen(3000, ()=> {
    console.log('NodeAPI app is running on port 3000 on this day')
 })




