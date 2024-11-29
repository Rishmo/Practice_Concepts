let name = "Moon";
console.log(name);
console.log(name + " Sahu" );

// alert("Hii Moon");
// prompt("Is your name is " + name);
// console.log(`your name is ${name}`);
// console.error("Name should be start with a letter");
// console.warn("Please check your name");
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.indexOf("M")); // case sensitive

let str = "               Tuls";
console.log(str);

console.log("After using trim:", str.trim());

// slice method

let s = "Mahi Moonnn";
console.log(s.slice(5));
console.log(s.slice(-5));
console.log(s.slice(0,6));

console.log(s.replace("M","T"));
console.log(s.replace("Mahi", "tuls"));

console.log(s.repeat(5)); //Mahi MoonnnMahi MoonnnMahi MoonnnMahi MoonnnMahi Moonnn

// Arrays

let arr=[];  // empty array
console.log(arr);
console.log(`Empty array length: ${arr.length}`);

let fruits = ["Mango" , "Banana", "Apple"];
console.log(fruits[0]);

// Array Methods: 
// Push: adds at last
// Pop: delete from end and returns it
// unshift: add to start
// shift: delete from start and returns it
// indexOf: returns index of something
// includes: search for a value (return in true & false) 
// ... etc.,

console.log(fruits.push("Apricot")); // return total length
console.log(fruits);
console.log(fruits.pop()); // returns item name which is poped
console.log(fruits.pop("Mango")); // last one is deleted even after assigning value
console.log(fruits); //['Mango', 'Banana']

console.log(fruits.unshift("apricot"));
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);
console.log(fruits.shift("Banana")); // first one is deleted even after assigning value
console.log(fruits);

console.log(fruits.includes("Banana")); // includes function return bollean value for items

let veges = ["Potato", "Tomato"];
console.log(veges);
console.log(fruits.concat(veges));

console.log(veges.reverse());

console.log(veges.slice());
console.log(veges.slice(1));
console.log(veges.slice(0,1));
console.log(veges.slice(-3));

console.log(veges.sort());

console.log(veges.splice(1));
console.log(veges);

let clrs = ["Black", "Yellow", "Grey", "Pink", "Brown", "Purple"];
console.log(clrs);

console.log(clrs.splice(4));
console.log(clrs);

console.log(clrs.splice(0,1));
console.log(clrs); //['Yellow', 'Grey', 'Pink']

console.log(clrs.splice(0, 1, "Orange", "Green")); //['Yellow']
console.log(clrs); //['Orange', 'Green', 'Grey', 'Pink']

console.log(clrs.splice(0, 3, "White", "Golden")); // ['Orange', 'Green', 'Grey']
console.log(clrs); //['White', 'Golden', 'Pink']

// Array References

let a= ["a", "b"];
let ar = a;
console.log(a === ar);

console.log(clrs);
for(let clr of clrs){
    console.log(clr);
}

// Object Literal
const student = {
    name: "Moon",
    Roll: 22,
};
student.name= "Tuls"; // updation
console.log(student.name);

// Random Integers

let num=Math.random();
console.log(num);

// function

function myName (name){ // function declaration with argument
    console.log(name);
}

myName("Moon"); // function calling
// Higher Order function
function multipleGreet(func, n) {
    for(let i=1; i<=n; i++){
        func();
    }
}

let greet = function() {
    console.log("Hello");
}

multipleGreet(greet, 2);

// methods

const Calculator = {
    add: function(a,b){
        return a + b;
    },

    sub: function(a,b){
        return (a - b);
    },

    mul: function(a,b){
        return (a * b);
    },

    div: function(a,b){
        return (a / b);
    },

    modulo: function(a,b){
        return (a % b);
    }
};

console.log(Calculator.add(1,2));

// this keyword= it refers to an object that is executing the current piece of code

const st ={
    name: "Moon",
    html: 99,
    css: 95,
    js: 90,
    getAvg() {
        let avg= (this.html + this.css + this.js)/3;
        console.log(avg);
    }
};

st.getAvg();

// window.alert("Hello");

// set timeout

console.log("hi there!");
setTimeout( () => {
    console.log("Moon"); // after 4 sec it will execute
}, 4000);
console.log("Welcome");

//set interval

let id= setInterval(() => {
    console.log("Moon");
}, 2000); // it will execute the function again and again according to the time interval

clearInterval(id); // to stop axecution of upper code

let nums= [1,2,3,4,5,6,7,8];
let even = nums.filter((nums) => {
    return nums %2 == 0;
});
console.log(even);

console.log([1, 2, 3].reduce((res,ele) => (res+ele))); // reduce method