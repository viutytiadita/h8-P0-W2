function pasanganTerbesar(num) {
    var convertertoString = num + '';
    var tempHighest = 0;
    for(var i=0; i<=convertertoString.length-1;i++){
      var tempNow = convertertoString[i]+ ''+ convertertoString[i+1];

      if(tempHighest <= tempNow){
        tempHighest = tempNow;
      }
    }
    return Number(tempHighest);
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99 
