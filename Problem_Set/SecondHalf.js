/*SIX*/

var factorial=function(x){
  var facProduct=1
  for(var i=1; i<=x; i++){
    facProduct=facProduct*i
  }
  return facProduct
}

console.log(factorial(6))
