const mongoose = require('mongoose')

const journalSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    story:{type: String, required: true},
})

const Journal = mongoose.model("Journal", journalSchema)

module.exports = Journal