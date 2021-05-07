function addUpto(n){
  return n * (n + 1) / 2
}

let t1 = new Date()
addUpto(1000000000000)
let t2 = new Date()

console.log(`Time elapsed: ${(t2 - t1) / 1000 } seconds.`)