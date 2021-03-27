const express = require('express')
const controller = require('./controller')
function apiDNA(app) {
  const router = express.Router()

  app.use('/api/dna', router)



  router.get('/', (req, res) => {

    controller.getStats()
      .then(response => res.send(response))
      .catch(err => res.status(500).send(err))
  })



  router.post('/', (req, res) => {
    const { dna } = req.body

    controller.mutateDNA(dna).then(dnaReq => {
      if(dnaReq.mutated === false) {
        res.status(403).json({
          status: res.statusCode,
          dnaReq
        })
      } else {
        res.status(200).json({
          status: res.statusCode,
          dnaReq
        })
      }


    }).catch(err => console.error(err))

  })
}

module.exports = apiDNA