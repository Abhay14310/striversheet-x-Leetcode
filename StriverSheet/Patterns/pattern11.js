class solution{
    pattern(n){
        for(let i = 0 ; i < n ; i++){
            let str;
            if(i % 2 == 0){
                str = 1;
            } else {
                str = 0;
            }
            for(let j = 0 ; j <= i ; j++){
                process.stdout.write(str + " ");
                // console.log(str + " ");
                str = 1 - str;
            }
            console.log();
        }

    }
}
const n = 5;
let sol = new solution();
sol.pattern(n);