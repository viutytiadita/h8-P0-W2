function inputKata(kata){
    var temp = '';
    for(var i=kata.length-1; i>=0;i--){
        temp = temp + kata[i];
}
return temp;
}
console.log(inputKata("hello world!"));




//input "hello world!"
//output
//"!dlrow olleh"
