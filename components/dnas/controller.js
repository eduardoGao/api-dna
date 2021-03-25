const addDna = require('./store')

function mutateDNA(dna) {
  addDna(dna)
  return new Promise((resolve, reject) => {
    const regex = /(.)\1{3}/
    const data = []
    dna.map(item => {
      const validation = regex.test(item)
      data.push(validation)
    })
    const mutation = data.filter(value => value === true).length
    const result = mutation >= 2 ? true : false
    resolve(result)
  })

}

module.exports = mutateDNA