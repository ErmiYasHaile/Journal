const mongoose = require('mongoose')

const journalSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    story:{type: String, required: true},
    // date: {type:} I am trying to add the time stamp-- 
    // Whenever the user edit or create it should show the date under the post
})

const Journal = mongoose.model("Journal", journalSchema)

module.exports = Journal