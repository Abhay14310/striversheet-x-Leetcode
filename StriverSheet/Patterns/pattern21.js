class solution{
    pattern(n){
        for(let i = 0; i <= n- 1;i++){
            for(let j = 0; j <= n- 1;j++){
                if( i==0 || j == 0 || i == n -1 || j == n - 1){
                    process.stdout.write("*");
                    // console.log("*");
                } else {
                    process.stdout.write(" ");
                    // console.log(" ");
                }
            }
            process.stdout.write("\n");
        }
    }
}
const n = 3;
let sol = new solution();
sol.pattern(n);