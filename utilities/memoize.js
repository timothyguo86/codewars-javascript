function memoize(fn) {
  const cache = {}

  return function (...args) {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)

    cache[args] = result

    return result
  }
}

export default memoize
