
//adding
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


//var BMI= function(weight,height){
  return (weight/(height^2));
}
var m = parseInt(prompt("Enter your weight in kg: "));
var h = parseInt(prompt("Enter yout height in m: "));
alert("Your Body Mass Index is "+BMI(m,h));



//convert from celsius to fahrenheit (0°C × 9/5) + 32 = 32°F
var c2f = function(t){
  return ((t*9/5)+32);
}

var c = parseInt(prompt("Enter the tempreture in celsius: "));

alert("The tempreture "+ c + "c is equal to "+ c2f(c) +"f");


//convert temp fron f to c =====> (0°F − 32) × 5/9 = -17.78°C


var f2c = function(t){
  return ((t-32)*5/9);
}

var f = parseInt(prompt("Enter the tempreture in fahrenheit: "));

alert("The tempreture "+ f + "f is equal to "+ f2c(f) +"c");


//convert gallons to liters 1 gallon = 3.78541 liters =====>  multiply the volume value by 3.785==> g*3.785
var g2l = function(v){
  return (v*3.785);
}

var g = parseInt(prompt("Enter the volume in gallon: "));

alert("The volume "+ g + " g is equal to "+ g2l(g) +" liter");

//convert litters to gallons ===> 1 gallon = 3.78541 liters =====>  divide the volume value by 3.785 ==> l/3.785

var L2g = function(v){
  return (v/3.785);
}

var L = parseInt(prompt("Enter the volume in liters: "));

alert("The volume "+ L + " liter is equal to "+ L2g(L) +" gallon");
