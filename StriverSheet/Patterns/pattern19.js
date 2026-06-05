// class solution{
//     pattern(n){
//         let inispaces = 0;
//         for(let i =0 ; i< n; i++){
//             let str = "";
//             for(let j = 0 ; j < n - i; j++){
//                 str += "*";
//             }
//             for(let k = 0; k < inispaces; k++){
//                 str += " ";
//             }
//             for(let l = 0; l < n - i; l++){
//                 str += "*";
//             }
//                 inispaces += 2;
//             console.log(str);
//         }
//      let inispaces2 = 2 * (n - 1);
//      for(let i = 1; i <= n; i++){
//         let str1 = "";
//         for(let j = 0; j < i; j++){
//             str1 += "*";
//         }
//         for(let k = 0; k < inispaces2; k++){
//             str1     += " ";
//         }
//         for(let l = 0; l < i; l++){
//             str1 += "*";
//         }
//         console.log(str1);
//         inispaces2 -= 2;
//      }
// }
// }
// const n = 3;
// let sol = new solution();
// sol.pattern(n);

class Solution {
  // Function to print Pattern 19
  pattern19(N) {
    // Initial spaces for upper half
    let iniS = 0;

    // Loop for upper half rows
    for (let i = 0; i < N; i++) {
      // Stars on left
      let row = "*".repeat(N - i);
      // Spaces in middle
      row += " ".repeat(iniS);
      // Stars on right
      row += "*".repeat(N - i);
      console.log(row);
      // Increase middle spaces by 2
      iniS += 2;
    }

    // Initial spaces for lower half
    iniS = 2 * N - 2;

    // Loop for lower half rows
    for (let i = 1; i <= N; i++) {
      // Stars on left
      let row = "*".repeat(i);
      // Spaces in middle
      row += " ".repeat(iniS);
      // Stars on right
      row += "*".repeat(i);
      console.log(row);
      // Decrease middle spaces by 2
      iniS -= 2;
    }
  }
}

// Driver code
(function () {
  // Create solution object
  const sol = new Solution();
  // Define N
  const N = 5;
  // Call pattern function
  sol.pattern19(N);
})();
