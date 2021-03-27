const mongoose = require('mongoose')


async function connect(uri) {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('[db] Database connected'))
    .catch((err) => console.error(`[ERROR] ${err}`))
}

module.exports = connect