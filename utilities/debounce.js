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
