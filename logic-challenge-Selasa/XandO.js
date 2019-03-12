function xo(str) {
    // you can only write your code here!
    var countX=0;
    var countO=0;
    for(var i=0; i<str.length;i++){
        if(str[i] == 'x'){
            countX = countX + 1;
        }
        else if(str[i] == 'o'){
            countO = countO + 1;
        }
        else{

        }
    }
    
    if(countX == countO){
        return true;
    }
    else{
        return false;
    }
     
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true