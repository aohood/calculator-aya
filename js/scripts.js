

var add = function (a,b){
  return (a + b);
}
var n1 = parseInt(prompt("Enter the first number:"));
var n2 = parseInt(prompt("Enter the second number:"));
alert("The result of adding " + n1 + " and " + n2 + " is " + add(n1,n2));

//subestraction
var sub = function(a,b){
  return (a-b);
}
var n1 = parseInt(prompt("Enter the first number: "));
var n2 = parseInt(prompt("Enter the second number: "));
alert("The result of subestraction "+n1+" - "+n2+" is "+sub(n1,n2));


//mul
var mul = function(a,b){
  return (a*b);
}
var n1 = parseInt(prompt("Enter the first number: "));
var n2 = parseInt(prompt("Enter the second number: "));
alert("The result of multipling "+n1+" * "+n2+" is "+mul(n1,n2));

//division

var division= function(a,b){
  return (a/b);
}
var n1 = parseInt(prompt("Enter the first number: "));
var n2 = parseInt(prompt("Enter the second number: "));
alert("The result of subestraction "+n1+" / "+n2+" is "+division(n1,n2));
