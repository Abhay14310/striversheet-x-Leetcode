function pattern17(N) {
    // Loop for each row
    for (let i = 0; i < N; i++) {
        let row = "";

        // Print leading spaces
        row += " ".repeat(N - i - 1);

        // Initialize character code for 'A'
        let ch = "A".charCodeAt(0);
        let breakpoint = Math.floor((2 * i + 1) / 2);

        // Print characters in row
        for (let j = 1; j <= 2 * i + 1; j++) {
            row += String.fromCharCode(ch);
            if (j <= breakpoint) ch++;
            else ch--;
        }

        // Print trailing spaces
        row += " ".repeat(N - i - 1);

        // Print the constructed row
        console.log(row);
    }
}

// Driver code
const N = 5;
pattern17(N);
