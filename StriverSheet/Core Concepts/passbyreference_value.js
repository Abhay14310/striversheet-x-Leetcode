// Pass by Value for primitives

function modify(a) {
    a = a + 10;
}

let x = 5;
modify(x);
console.log(x); // Output: 5
// Pass by Reference for objects/arrays

function modify(obj) {
    obj.value += 10;
}

let data = { value: 5 };
modify(data);
console.log(data.value); // Output: 15

// JavaScript	Primitives (number, string, boolean, etc.) 
// are passed by value.	Objects, arrays, and functions are passed by reference
//  to the object.	Reassigning the parameter breaks the link to
//  the original object.