class solution{
    pattern(n){
        for(let i = 1; i <=2*n-1; i++){
            let str = "";
            let star = i;
            if(i > n){
                star = 2*n - i;
            }
            for(let j = 1; j <= star; j++){
                str += "*";
            }
            console.log(str);

        }
    }
}
let sol = new solution();
let n = 3;
sol.pattern(n);