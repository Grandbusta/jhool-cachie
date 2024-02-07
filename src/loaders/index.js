const expressLoader = require('./express')

module.exports = async function (app) {
  await expressLoader(app)
}
