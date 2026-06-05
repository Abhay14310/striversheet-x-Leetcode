class Solution{
    pattern(n){
        let inispaces =  2 * (n - 1);
        for(let i = 1; i <= n; i++){
            let str = "";
            for(let j = 1; j <= i; j++){
                str += "*";
            }
            for(let k = 1; k <= inispaces; k++){
                str += " ";
            }
            for(let l = 1; l <= i; l++){
                str += "*";
            }
            console.log(str);
            inispaces -= 2;
        }
        let inispaces2 = 2;
        for(let i = n - 1; i >= 1; i--){
            let str1 = "*".repeat(i);
            str1 += " ".repeat(inispaces2);
            str1 += "*".repeat(i);
            console.log(str1);
            inispaces2 += 2;
        }
    }
}const n = 5;
let sol = new Solution();
sol.pattern(n);