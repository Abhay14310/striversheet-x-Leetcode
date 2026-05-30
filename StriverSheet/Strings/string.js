function modifyString(str) {
    let modifiedStr = str;
    modifiedStr += " World";
    return modifiedStr;
}
let originalString = "Hello";
let result = modifyString(originalString);

console.log("originalString:", originalString); // Output: "Hello"
console.log("result:", result); // Output: "s World"