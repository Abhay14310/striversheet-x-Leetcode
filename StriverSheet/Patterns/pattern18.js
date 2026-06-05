class Solution {
    // Function to print Pattern 18
    pattern18(N) {
        // Loop for each row
        for (let i = 0; i < N; i++) {
            let row = "";
            // Print characters from ('A' + N - 1 - i) to ('A' + N - 1)
            for (
                let ch = "A".charCodeAt(0) + N - 1 - i;
                ch <= "A".charCodeAt(0) + N - 1;
                ch++
            ) {
                row += String.fromCharCode(ch) + " ";
            }
            console.log(row);
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
    sol.pattern18(N);
})();
