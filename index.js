const express = require('express')
const app = express()
const port = 3000
const apiDNA = require('./components/dnas/route')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
apiDNA(app)

app.listen(port, () => {
  console.log(`App listening in port http://localhost:${port}`)
})