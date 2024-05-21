let str = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

function validAnagram(str) {
  const sorted = str.map(item => {
    return item.split('').sort().join('');
  });
  let map = {};

  for (let i = 0; i < sorted.length; i++) {
    if (!map[sorted[i]]) {
      map[sorted[i]] = [str[i]];
    } else {
      map[sorted[i]].push(str[i]);
    }
  }

  return Object.values(map);
}

console.log(validAnagram(str));
