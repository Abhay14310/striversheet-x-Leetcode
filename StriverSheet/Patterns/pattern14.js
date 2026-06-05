class solution {
    patterm(n) {
        for (let i = 0; i < n; i++) {
            let str = "";
            for (let j = 0; j <= i; j++) {
                str += String.fromCharCode(65 + j) + " ";
                // Char = String.fromCharCode(Char.charCodeAt(0) + 1);
            }
            console.log(str);
        }
    }
}
const n = 5;
let sol = new solution();
sol.patterm(n);
