"use strict";
//console.log("It works")
//string
//let myName= 'JJ';
//myName = 28;
//number
//let myAge = 41;
//myAge = 'JJ';
var myRealAge;
myRealAge = 27;
//myRealAge = '27';
//boolean
var hasHobbies = false;
//hasHobbies = 1;
//arrrays
var hobbies = ["Cooking", "Sports", 100];
//console.log(hobbies[2]);
// tuples
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Red"] = 3] = "Red"; //3
})(Color || (Color = {}));
var myColor = Color.Blue;
// any
var car = "BMW";
car = { brand: "BMW", series: 3 };
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 10));
//function types
var myMultiply;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userDate = {
    name: "JJ",
    age: 41
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        if (all)
            return this.data;
        return [0, 0, 0];
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        if (all)
            return this.data;
        return [0, 0, 0];
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
//myRealRealAge = true;
// check types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
// never
function neverReturns() {
    throw new Error('An error!');
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "JJ",
    bankAccount: bankAccount,
    hobbies: ["sports", "Cooking"]
};
myself.bankAccount.deposit(4000);
console.log(myself);
// let and const
console.log("LET & CONST");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99; //Won't work
// Block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//Arrow Functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multipleNumbers = function (number1, number2) { return number1 * number2; };
console.log(multipleNumbers(10, 3));
var greet = function () {
    console.log("Hello");
};
greet();
//const greetFriend = friend => console.log(friend); //BAD implicit type!
var greetFriend = function (friend) {
    console.log(friend);
};
greetFriend("Manu");
// Default Parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
// Spread Operator
// Rest & Spread
console.log("REST & SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers)); //SPREAD
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 6));
console.log("DESTRUCTURING");
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData = { userName: "JJ", age: 41 };
var myName = userData.userName, myAge = userData.age;
console.log(myName, myAge);
//Template Literals
// Allows multiline strings and pass string variables
var userName = "JJ";
var greeting = " This is a heading!\nI'm " + userName + ".\nThis is cool!";
console.log(greeting);
// Symbols, iterators and generators?
