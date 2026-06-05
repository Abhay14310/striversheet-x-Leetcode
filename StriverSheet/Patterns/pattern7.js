class solution{
    pattern(n){
        for(let i = 0 ; i < n;i++){
            let str = "";
            // for spaces write the loop
            for(let j =0;j< n-i-1;j++){
                str += " ";
            }
            for(let k =0;k<2*i+1;k++){
                str+="*";
            }
            for(let l =0;l<n-i-1;l++){
                str += " ";
            }
            console.log(str);
        }
    }
}
let sol = new solution();
sol.pattern(5);