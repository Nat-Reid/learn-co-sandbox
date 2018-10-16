const collections = [1,[2,[4,[5,[6]],3]]]
function find(array,criteriaFn) {
  let current = array
  let next = []
  while (current) {
    if (criteriaFn(current)){
      return current
    }
    if (Array.isArray(current)){
      for (let  i = 0; i < current.length; i++){
        next.push(current[i])
      }
    if (Object.isobject(current)){
      while (current.length >= 0){
        next.push(current.shift())
      }
    }
    }
    current = next.shift()
  }
  return null
}
var criteria1 = function(n){
  if (n>5){
    return true
  }
  else{
    return false
  }
}
var criteria2 = function(n){
  if (n => (typeof n === 'number' && n > 5)){
    return true
  }
  else{
    return false
  }
}
console.log(find(collections,criteria2))