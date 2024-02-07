const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')
const { headers } = require('../api/middlewares')
const routes = require('../api')

const expressLoader = async (app) => {
  app.use((req, res, next) => {
    const startTime = new Date()
    res._requestStarted = startTime
    next()
  })
  app.use(headers)
  app.use(logger('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  app.get('/favicon.ico', (req, res) => res.status(204).end())
  app.use('/', routes())

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404))
  })

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.send({ message: 'error', error: err.status })
  })
  console.log('express initialized')
  return app
}

module.exports = expressLoader
