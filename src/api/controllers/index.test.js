const { keywords, addKeywords } = require('../data')

describe('Search', () => {
  test('add keyword successfully', () => {
    const str = 'The quick zebra outran the cheetah'
    const expRes = {
      the: 2,
      'the quick': 1,
      'the quick zebra': 1,
      'the quick zebra outran': 1,
      'the quick zebra outran the': 1,
      'the quick zebra outran the cheetah': 1,
      quick: 1,
      'quick zebra': 1,
      'quick zebra outran': 1,
      'quick zebra outran the': 1,
      'quick zebra outran the cheetah': 1,
      zebra: 1,
      'zebra outran': 1,
      'zebra outran the': 1,
      'zebra outran the cheetah': 1,
      outran: 1,
      'outran the': 1,
      'outran the cheetah': 1,
      'the cheetah': 1,
      cheetah: 1,
    }
    addKeywords(str)
    expect(keywords).toEqual(expRes)
  })
})
