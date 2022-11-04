const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()

const PORT = process.env.PORT


mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// DATABASE CONNECTION
const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongo not running?"))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// CREATE
app.post('/journal', (req, res)=>{
    // res.send('RECiEVeD')
    res.send(req.body)
})













//Listener
app.listen(PORT,()=>console.log(`Live on port ${PORT} and still working`))