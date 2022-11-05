const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Journal = require('./models/journal')


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


// I        N       D       U       C       E       S
// INDEX    NEW     DELETE  UPDATE  CREATE  EDIT    SHOW


// INDEX
app.get('/journal',(req, res)=>{
    Journal.find({},(error, alljournallist)=>{    
    res.render('index.ejs', {
        journal: alljournallist})
    })
    // res.send('WORKS FINE')
})

// NEW
app.get('/journal/new',(req, res)=>{
    res.render('new.ejs')
    // res.send('NEW ROUTE IS WORKING')
})

// CREATE
app.post('/journal', (req, res)=>{
    // res.send('RECiEVeD')

    Journal.create(req.body, (error, CreatedJournal)=>{
        res.send(CreatedJournal);
     })
    // res.send(req.body)
})
 












//Listener
app.listen(PORT,()=>console.log(`Live on port ${PORT} and still working`))