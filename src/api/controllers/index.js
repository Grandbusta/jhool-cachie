const { keywords, addKeywords } = require('../data')

const search = async (req, res) => {
  try {
    const search_query = req.body.search_query
    addKeywords(search_query)
    return res.status(200).json({ status: 'ok' })
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ status: 'error', message: 'An error occured' })
  }
}

const analyse = async (req, res, next) => {
  try {
    const analysis_token = req.query.analysis_token.split(',')
    const results = {}
    for (let i = 0; i < analysis_token.length; i++) {
      if (keywords[analysis_token[i]]) {
        results[analysis_token[i]] = keywords[analysis_token[i]]
      } else {
        results[analysis_token[i]] = 0
      }
    }
    return res
      .status(200)
      .json({ results: results, time: `${new Date() - res._requestStarted}ms` })
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ status: 'error', message: 'An error occured' })
  }
}

const Controller = {
  search,
  analyse,
}

module.exports = Controller
