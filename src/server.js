const express = require('express')
const loaders = require('./loaders')

async function startServer() {
  const app = express()

  const PORT = process.env.PORT || 4000

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

  await loaders(app)
}

startServer()
