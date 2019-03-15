function fpb(input1, input2){

  output = input1 % input2;

  while(output!=0){
    input1 = input2;
    input2 = output;
    output = input1 % input2;
  }
  return input2;

}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
