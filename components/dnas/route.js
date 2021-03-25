const express = require('express')
const mutateDNA = require('./controller')

function apiDNA(app) {
  const router = express.Router()

  app.use('/api/dna', router)

  router.get('/', (req, res) => {
    res.send('Router instalado GET')
  })

  router.post('/', (req, res) => {
    const { dna } = req.body

    // const regex = /(.)\1{3}/
    // const data = []

    // dna.map(item => {
    //   const validation = regex.test(item)
    //   data.push(validation)
    // })
    // const mutation = data.filter(value => value === true).length
    // const result = mutation >= 2 ? true : false

    mutateDNA(dna).then(dnaReq => {
      if(dnaReq) {
        res.status(200).json({
          status: res.statusCode,
          message: 'Mutado',
          mutated: dnaReq
        })
      } else {
        res.status(403).json({
          status: res.statusCode,
          message: 'DNA no mutated',
          mutated: dnaReq
        })
      }
    }).catch(err => console.error(err))

  })
}

module.exports = apiDNA