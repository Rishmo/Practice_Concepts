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