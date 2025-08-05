function removeOuterParams (str: string): string{
  let ans = ""
  let depth = 0
  for (let char of str){
    if (char==="("){
      if (depth>0){
        ans+=char;
      }
      depth++
    }else if (char===")"){
      depth--;
      if (depth>0){
        ans+=char
      }
    }else{
      ans+=char
    }
  }
  return ans
  
}

const str = "((a+b)(a-b))((a**2))"
const res = removeOuterParams(str)
console.log(res)