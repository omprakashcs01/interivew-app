console.log('start');
const testCallback = (username, callback) => {
  setTimeout(() => {
    callback(`My name is ${username}`);
  }, 2000);
};

const massage = massage => {
  console.log(massage);
};

testCallback('Om Prakash', massage);
console.log('End');
