console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');

console.log('Starting');

setTimeout(() => {
  console.log('Timeout');
}, 1000);


Promise.resolve().then(() => {}
)
console.log('End');
