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

// new

function asyncOp1(callback) {
  setTimeout(() => {
    const result1 = 'Result 1';
    callback(result1);
  }, 1000);
}

function asyncOp2(input, callback) {
  setTimeout(() => {
    const result2 = input + ' -> Result 2';
    callback(result2);
  }, 1000);
}

function asyncOp3(input, callback) {
  setTimeout(() => {
    const result3 = input + ' -> Result 3';
    callback(result3);
  }, 1000);
}

// Using callbacks
asyncOp1(result1 => {
  asyncOp2(result1, result2 => {
    asyncOp3(result2, result3 => {
      console.log(result3); // Final result
    });
  });
});
//////////////////////////////////////////////////////////////////////////////
// callback hell=>>>>>>

function step1(callback) {
  setTimeout(() => {
    console.log('Step 1 complete');
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log('Step 2 complete');
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log('Step 3 complete');
    callback();
  }, 1000);
}

function step4(callback) {
  setTimeout(() => {
    console.log('Step 4 complete');
    callback();
  }, 1000);
}

// Using callbacks, creating a nested structure
step1(() => {
  step2(() => {
    step3(() => {
      step4(() => {
        console.log('All steps complete!');
      });
    });
  });
});
