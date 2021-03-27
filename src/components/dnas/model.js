const mongoose = require('mongoose')

const dnaSchema = mongoose.Schema({
  dna: Array,
  mutated: Boolean
}, {
  versionKey: false
})

const dnaModel = mongoose.model('dna', dnaSchema)

module.exports = dnaModel