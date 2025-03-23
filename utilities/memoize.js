/**
 * Memoizes a function by caching its results.
 *
 * @param {Function} fn - The function to be memoized.
 * @returns {Function} - A memoized version of the function.
 */
function memoize(fn) {
  // Cache to store results
  const cache = {};

  // Return a memoized version of the function
  return function (...args) {
    if (cache[args]) return cache[args]; // Return cached result

    const result = fn.apply(this, args); // Compute result

    cache[args] = result; // Cache result

    return result; // Return computed result
  };
}

export default memoize;
