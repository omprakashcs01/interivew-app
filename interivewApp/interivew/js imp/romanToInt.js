// VI=6 , IV=4

function romanToInt(str) {
  const myMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const current = myMap[str[i]];
    const next = myMap[str[i + 1]];

    if (current < next) {
      //IV
      result = result +next - current;
      i++;
    } else {
      //VI
      result += current;
    }
  }
  return result;
}

//intto roman
function intToRoman(num) {
  let myMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = '';

  for (let key in myMap) {
    while (num >= myMap[key]) {
      result += key;
      num -= myMap[key];
    }
  }

  return result;
}

// Example usage
console.log(intToRoman(1994)); // Output: "MCMXCIV"
console.log(intToRoman(58)); // Output: "LVIII"
console.log(intToRoman(9)); // Output: "IX"
