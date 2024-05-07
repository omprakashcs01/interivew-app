//Currying
function a(x) {
  return function b(y) {
    return function c(z) {
      console.log('curying ', x, y, z);
    };
  };
}

console.log(a(4)(2)(3));

//Currying infinity

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(1)(5)(5)());

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}


