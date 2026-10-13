function flatObject(obj) {
    let result = {};
  
    for (let i in obj) {
      if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
        const temp = flatObject(obj[i]);
        for (let j in temp) {
          result[i + '.' + j] = temp[j];
        }
      } else {
        result[i] = obj[i];
      }
    }
    return result;
  }
  