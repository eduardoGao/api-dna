const express = require('express')
const app = express()
const { config } = require('../config')
const apiDNA = require('./components/dnas/route')
const connect = require('./db')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
apiDNA(app)

const uri = `mongodb+srv://dbUser:${config.MONGO_PASSWORD}@clusterdna.n9mlj.mongodb.net/${config.DB_NAME}?retryWrites=true&w=majority`
connect(uri)

app.get('/', (req, res) => {
  res.send('Go to /api/dna to get the stats')
})

app.listen(config.PORT, () => {
  console.log(`App listening in port http://localhost:${config.PORT}`)
})