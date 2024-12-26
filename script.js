//Declarations: Var, let and const
//var keyword
var sum=100;
console.log("simple var type variable"+sum);

var sum=200;
console.log("Redeclaration of variable"+sum);


console.log("Variable without declaration (or Hoisted) "+avg);
avg=300;

console.log("Variable without any keyword"+avg);


var var_name="CVRCSE";
function varscope(){
    var var_name="SAGAR";
    console.log("With in function");
    console.log(var_name)
}

varscope()
console.log("Outside the function");
console.log(var_name);

var avg;
var_name=23.46;
console.log("Redeclaration with other type:"+var_name);

//const keyword

//const const_num;

//console.log(const_num);
// const_num =500;

const const_num=400;

console.log("Simple const type variable declaration:"+const_num);

//const_num=200;
console.log("Re-assigment of variable is:"+const_num);

function constscope(){
    const const_name="SAGARCSE";
    
    console.log("Variable within function is:"+const_name);

}
console.log("Outside function");
constscope();
const const_name="MANGALAPALLY-HYDERABAD";
console.log(const_name);

//const_name=230;
console.log(const_name);


//Usage of let keyword

let let_name;
let_name="SHIVARAM";
console.log("Simple use of Let type:"+let_name);

//console.log("Accessing a variable berfore declaration (hoisting):"+num);

let num=234;
let num2;
function letscope(){
    let num=456;
    let let_name="JNTUH"
    console.log("accessing num within function:"+num);
    console.log("accessing name within function:"+let_name);
    let num2;

}
letscope();

console.log("accessing num outside function:"+num);
console.log(num2);

//Create an Object in ES6

//Object Literal (most common)
let Student = {
    name:"Nani",
    id:522,
    age:18,
    clgname:"CVRCOE",
    city:"Hyderabad",
    course:"CSE"
}

// Using the new keyword with Object Constructor

const std = new Object();
std.name="Mahi";
std.id=522;
std.age=18;
std.clgname="CVRCOE";
std.city="Hyderabad";
std.course="CSE";



// Update an Object - using dot natation

std.name="Ali";
std.course="ECE";
std.age=19;

// Update an Object - using bracket natation

Student['name']="Mahalaxmi";
Student['city']="Hanmakonda";

//Update an Object - Using Object.assign()

Object.assign(Student, { city: "Amaravathi", age: 20 });

//Access an Object - using bracket and dot natation

console.log("Student Details");
console.log(Student.name);
console.log(Student.clgname);

console.log("Std Details");
console.log(std.id);
console.log(std.course);