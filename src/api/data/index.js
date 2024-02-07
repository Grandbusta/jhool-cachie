const keywords = {}

const addKeywords = (str) => {
  let strSplit = str.toLowerCase().split(' ')

  for (let i = 0; i < strSplit.length; i++) {
    for (let j = i + 1; j <= strSplit.length; j++) {
      const sub = strSplit.slice(i, j).join(' ')
      if (keywords[sub]) {
        keywords[sub]++
      } else {
        keywords[sub] = 1
      }
    }
  }
}

module.exports = { keywords, addKeywords }
