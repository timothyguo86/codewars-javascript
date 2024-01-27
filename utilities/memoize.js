// Memoize function to cache results
function memoize(fn) {
  // Cache to store results
  const cache = {}

  // Return a memoized version of the function
  return function (...args) {
    if (cache[args]) return cache[args] // Return cached result

    const result = fn.apply(this, args) // Compute result

    cache[args] = result // Cache result

    return result // Return computed result
  }
}

export default memoize
