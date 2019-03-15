function angkaprime(angka){
  var output = true;
  if(angka === 0 || angka === 1){ 
    output =  false;
  } else{
    for(var i=2; i<(angka/2); i++){
      if(angka % i == 0){
        output = false;
        break
      }
    }
  }
  return output;
}

console.log(angkaprime(3)); // true
console.log(angkaprime(7)); // true
console.log(angkaprime(6)); // false
console.log(angkaprime(23)); // true
console.log(angkaprime(33)); // false