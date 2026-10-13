// utils/debounce.js //chatgpt
export const debounce = (func, wait) => {
  let timeout;

  return function (...args) {
    const context = this;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
};

///thorling
function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

// Example usage:
const handleResize = throttle(() => {
  console.log('Window resized');
}, 200); // Throttle the function to execute at most once every 200 milliseconds

window.addEventListener('resize', handleResize);
