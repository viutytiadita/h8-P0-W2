  
  function angkaPalindrome(inputPalindrome){

    var isPalindrome = (inputNumber) => {

        var lastDigit = 0;
        var sum = 0;
        var temp = inputNumber;
        var output = false;
      
        while(temp>0){
          lastDigit = temp % 10;
          sum = (sum * 10) + lastDigit;
          temp = Math.floor(temp / 10);
        }
        if(sum == inputNumber){
          output = true;
        } 
      
        return output
      }
    
    inputPalindrome++;
    
    while(!isPalindrome(inputPalindrome)){
      inputPalindrome++;
    }
  
    return inputPalindrome;
  }

  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001