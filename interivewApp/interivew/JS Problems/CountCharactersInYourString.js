function countCharter (string) {
    var result = {};
    
    for(let i = 0; i < string.length; i++) {
      if((string[i])){
        result[string[i]] += 1;
      } else {
        result[string[i]] = 1;
      }
    }
    
    return result;
  }

  console.log(count("my name"));








//   function countCharter (string) {
//     var result = {};
    
//     for(let i = 0; i < string.length; i++) {
//       if((string[i])){
//         result[string[i]] += 1;
//       } else {
//         result[string[i]] = 1;
//       }
//     }
    
//     return result;
//   }

//   console.log(count("my name"));