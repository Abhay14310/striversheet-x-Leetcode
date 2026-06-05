class solution{
    patterm(n){
        let number = 1;
        for(let i = 0 ; i < n ; i++){
            let str = "";
            for(let j = 0 ; j <= i ; j++){
                str += number + " ";
                number++;
            }
            console.log(str);
}
    }
}
const n = 5;
let sol = new solution();
sol.patterm(n);