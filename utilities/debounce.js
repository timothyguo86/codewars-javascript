/**
 * Creates a debounced function that delays invoking the provided function until after `delay` milliseconds
 * have elapsed since the last time it was invoked.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The number of milliseconds to delay.
 * @returns {Function} - The debounced function.
 */
function debounce(func, delay) {
  let timeoutId

  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => func.apply(null, args), delay)
  }
}

export default debounce
