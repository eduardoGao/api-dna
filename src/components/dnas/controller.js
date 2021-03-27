const addDna = require('./store')
const dnaModel = require('./model')

function mutateDNA(dna) {
  return new Promise((resolve, reject) => {

    const regex = /(.)\1{3}/
    const data = []
    dna.map(item => {
      const validation = regex.test(item)
      data.push(validation)
    })
    const mutation = data.filter(value => value === true).length
    const result = mutation >= 2 ? true : false

    const fullDna = {
      "mutated": result,
      dna
    }

    addDna(fullDna)
    resolve(fullDna)
  })
}



async function getStats() {
  const getData = await dnaModel.find({})

  const count_mutations = getData.filter(item => item.mutated === true).length
  const count_no_mutations = getData.filter(item => item.mutated === false).length
  const ratio = count_mutations / count_no_mutations

  const stats = {
    count_mutations,
    count_no_mutations,
    ratio
  }

  try {
    return stats
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  mutateDNA,
  getStats
}