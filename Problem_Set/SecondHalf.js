/*SIX*/

var factorial=function(x){
  var facProduct=1
  for(var i=1; i<=x; i++){
    facProduct=facProduct*i
  }
  return facProduct
}

console.log(factorial(6))

/*SEVEN*/

myString="This is a string."

var StringLength=function(myString){
  var length=-1
  for(i=0; i<=myString.length; i++){
    length++
  }
return length
}

console.log(StringLength(myString))

/*EIGHT*/

myArray=[6,2,14,9,5]

var maximum=function(myArray){
  var largest=0
  for(i=0; i<myArray.length; i++){
    if (myArray[i]>largest){
      largest=myArray[i]
    }
  }
 return largest 
}

console.log(maximum(myArray))

/*NINE*/



