const {equal, throws, deepEqual} = require('assert')

test('exports', () => {
  const {flatten} = require('..')

  test('.flatten', () => {
    test('is callable', () => {
      equal(typeof flatten, 'function')
    })

    test('throws', () => {
      test('when no iterable is provided', () => {
        throws(flatten.bind(null, 5), TypeError)
      })
    })

    test('returns', () => {
      test('flattened array for nested structures', () => {
        const flattened = flatten(['a', 'b', ['c'], 'd', ['e']])
        deepEqual(flattened, ['a', 'b', 'c', 'd', 'e']
        )
      })

      test('does not flattened array for deeply nested structures', () => {
        const flattened = flatten(['a', [['b']], 'c'])
        deepEqual(flattened, ['a', ['b'], 'c'])
      })

      test('empty array when no args are given', () => {
        deepEqual(flatten(), [])
      })
    })
  })
})
