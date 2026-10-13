
function printNumber(n) {
  if (n > 10) return; // Base condition

  console.log(n);
  printNumber(n + 1); // Recursive call
}

printNumber(1);
