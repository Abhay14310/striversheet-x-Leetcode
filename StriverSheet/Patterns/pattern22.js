class solution{
    pattern(n){
        for(let i = 0; i < 2*n-1; i++){
            let str = "";
            for(let j = 0; j < 2*n-1; j++){
                // Calculate distance from each edge
                let distFromTop = i;
                let distFromLeft = j;
                let distFromBottom = 2*n - 2 - i;
                let distFromRight = 2*n - 2 - j;
                
                // Find minimum distance
                let minDist = Math.min(distFromTop, distFromLeft, distFromBottom, distFromRight);
                
                // Number = n - minimum distance from edges
                let num = n - minDist;
                
                str += num + " ";
            }
            console.log(str);
        }
    }
}
const n = 4;
let sol = new solution();
sol.pattern(n);