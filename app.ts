//console.log("It works")
//string
//let myName= 'JJ';
//myName = 28;

//number
//let myAge = 41;
//myAge = 'JJ';

let myRealAge: number;
myRealAge = 27;
//myRealAge = '27';

//boolean
let hasHobbies = false;
//hasHobbies = 1;

//arrrays
let hobbies: any[] = ["Cooking", "Sports", 100];
//console.log(hobbies[2]);

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
    Gray, //0
    Green, //1
    Blue, //2
    Red //3
}
let myColor: Color = Color.Blue;

// any
let car: any = "BMW";
car = {brand: "BMW", series: 3};

//functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(2, 10));

//function types
let myMultiply: (val1: number, val2: number) => number;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2));

// objects
let userDate: { name: string, age: number } = {
    name: "JJ",
    age: 41
};

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data:[100, 3.99, 10],

    output: function (all:boolean): number[] {
        if(all)
            return this.data;
        return [0,0,0];
    }
};

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};
let complex2: Complex = {
    data:[100, 3.99, 10],

    output: function (all:boolean): number[] {
        if(all)
            return this.data;
        return [0,0,0];
    }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
//myRealRealAge = true;

// check types
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}

// never
function neverReturns(): never
{
    throw new Error('An error!');
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;

type BankAccount = {money: number, deposit: (value: number) => void};

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: "JJ",
    bankAccount: bankAccount,
    hobbies: ["sports", "Cooking"]
};
myself.bankAccount.deposit(4000);
console.log(myself);

// let and const
console.log("LET & CONST");
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99; //Won't work

// Block scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

//Arrow Functions
console.log("ARROW FUNCTIONS");
const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};
console.log(addNumbers(10, 3));

const multipleNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multipleNumbers(10,3));

const greet = () => {
    console.log("Hello");
};
greet();

//const greetFriend = friend => console.log(friend); //BAD implicit type!
const greetFriend = (friend: string) => {
    console.log(friend);
}
greetFriend("Manu");

// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => {
  while (start >0)
  {
      start--;
  }
  console.log("Done!", start);
};
countdown();

// Spread Operator
// Rest & Spread
console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers)); //SPREAD

function makeArray(...args: number[]){ //REST
    return args;
}

console.log(makeArray(1,2,6));

console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData = {userName: "JJ", age: 41 };
const {userName: myName, age: myAge} = userData;
console.log(myName, myAge);

//Template Literals
// Allows multiline strings and pass string variables
const userName = "JJ";
const greeting = ` This is a heading!
I'm ${userName}.
This is cool!`;
console.log(greeting);

// Symbols, iterators and generators?




