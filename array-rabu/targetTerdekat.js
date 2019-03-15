function targetTerdekat(arr) {
    // you can only write your code here!
    var indexO =-1;
    var indexX =-1;
    var lengthXO=0;
    var lengthNow=0;
  
    for(var i=0; i<arr.length; i++){
      if(arr[i] == 'x'){
        indexX = i;
        if(indexO != -1){
          lengthNow = indexX - indexO;
        }
      }else if(arr[i] == 'o'){
        indexO = i;
        if(indexX != -1){
          lengthNow = indexO - indexX;
        }
      }
  
      if(lengthXO == 0){
        lengthXO = lengthNow;
      }else if(lengthXO > lengthNow && lengthXO != 0){
        lengthXO = lengthNow;
      }
    }
    return lengthXO;
  }
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', 'x', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2