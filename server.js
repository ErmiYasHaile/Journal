const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//Listener
app.listen(PORT,()=>console.log(`Live on port ${PORT} and still working`))