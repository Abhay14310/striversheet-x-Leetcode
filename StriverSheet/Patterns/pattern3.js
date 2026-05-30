class solution {
  pattern2(n) {
    for (let i = 0; i < n; i++) {
      let str = "";
      for (let j = 0; j <= i; j++) {
        str += j + 1 + " ";
      }
      console.log(str);
    }
  }
}
let sol = new solution();
const n = 5;
sol.pattern2(n);
