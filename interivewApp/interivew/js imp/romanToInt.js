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
      result = result + next - current;
      i++;
    } else {
      //VI
      result += current;
    }
  }
  return result;
}
