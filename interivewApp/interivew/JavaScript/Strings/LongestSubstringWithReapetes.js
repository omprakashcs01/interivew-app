function longestSubstring(str){

    let longestSubstring = 0

       let set = new Set()


       let left = 0
       let right = 0


  while (right < str.length) {
    let letter = str[right] 

    if(!set.has(letter)){
          set.add(letter)
          longestSubstring = Math.max(longestSubstring,set.size)
          right++
    } else {
          set.delete(str[left])
          left ++
    }
  }    
  return longestSubstring
}

https://www.youtube.com/watch?v=i1edO6FkGm0