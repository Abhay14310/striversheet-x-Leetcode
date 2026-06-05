class solution{

    pattern(n){
        for(let i = 0 ; i <n ;i++){
            let str = "";
            for(let j =0 ;j<=i;j++){
                str+=String.fromCharCode(65+i)+" ";
            }
            console.log(str);
        }
    }
}
const n = 5;
let sol = new solution();
sol.pattern(n);