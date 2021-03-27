const dnaModel = require('./model')

function addDna(dna) {
  const newDna = new dnaModel(dna)
  newDna.save()
}

module.exports = addDna