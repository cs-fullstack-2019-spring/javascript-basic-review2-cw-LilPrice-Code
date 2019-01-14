function test(a, b){
    return (a+5)+ b;
}
var number = 8;
var words = " is awesome!";
if(number != parseInt(number)){
    console.log("ERROR");
}
else if(words != " is awesome!"){
    console.log("ERROR2");
}
else {
    console.log(test(number, words));
}
