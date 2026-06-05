// class solution {
//     pattern(n){
//         for(let i = 0 ; i < n ; i++){
//             let str = "";   
//             for(let j = 0 ; j <= i ; j++){
//                 str  += j + 1 ;
//             }
//             for(let k=0;k <n - i -1;k++){
//                 str += " ";
//             } 
//             for(let l=i;l>=0;l--){
//                 str += l + 1 ;
//             }
//             console.log(str);
//         }
//         }
//     }

// const n = 5;
// let sol = new solution();
// sol.pattern(n);


class Solution {
    // Function to print the pattern
    pattern12(N) {
        // Initial number of spaces in the first row
        let spaces = 2 * (N - 1);

        // Outer loop for the number of rows
        for (let i = 1; i <= N; i++) {
            
            // Inner loop to print numbers in increasing order
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += j;
            }

            // Inner loop to print spaces in the middle
            for (let j = 1; j <= spaces; j++) {
                row += " ";
            }

            // Inner loop to print numbers in decreasing order
            for (let j = i; j >= 1; j--) {
                row += j;
            }

            // Print the row
            console.log(row);

            // Decrease spaces by 2 after each row
            spaces -= 2;
        }
    }
}

// Driver code
const sol = new Solution();
const N = 5;
sol.pattern12(N);  // Call the function to print the pattern
