class solution{
    patternn1(n){
        for(let i=0;i<n;i++){
            let str="";
            for(let j=0;j<n;j++){
                str+="*";
            }
            console.log(str);
        }
}}
let sol=new solution();
let obj= new solution();
const n = 5;
sol.patternn1(n);
obj.patternn1(n);