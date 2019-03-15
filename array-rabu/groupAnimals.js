var selectionSortFirstCharOfString = function(inputString){

  for(var i=0; i<inputString.length-1; i++){

    var minusIndex = i

    for(var j=i+1; j<inputString.length; j++){

      if(inputString[j].charAt(0) < inputString[minusIndex].charAt(0)){
        minusIndex=j
      }

    }

    var smallerNumber = inputString[minusIndex] 
    inputString[minusIndex] = inputString[i]
    inputString[i] = smallerNumber
  }
}

function groupAnimals(animals){

  var output = [];

  selectionSortFirstCharOfString(animals)

  var previusChar = animals[0].charAt(0)
  var arrayNow = []

  for(var i=0; i<animals.length; i++){
    
    if(previusChar !== animals[i].charAt(0)){
      output.push(arrayNow)
      arrayNow = []
    }
    arrayNow.push(animals[i])
    previusChar = animals[i].charAt(0)
  }

  output.push(arrayNow)
  return output

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]