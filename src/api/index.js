const Controller = require('./controllers')
const { Router } = require('express')
const { responseTime } = require('./middlewares')

module.exports = function routes() {
  const app = Router()

  app.post('/search', Controller.search)
  app.get('/analyse', Controller.analyse)

  return app
}
