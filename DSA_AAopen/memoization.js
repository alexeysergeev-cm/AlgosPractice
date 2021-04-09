
function fib(n, memo = {}){
  
  if(n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  // return fib(n-1) + fib(n-2)
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

console.log(fib(100))