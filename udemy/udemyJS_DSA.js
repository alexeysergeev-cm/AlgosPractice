function addUpto(n){
  return n * (n + 1) / 2
}

let t1 = new Date()
addUpto(1000000000000)
let t2 = new Date()

console.log(`Time elapsed: ${(t2 - t1) / 1000 } seconds.`)




///same frequency

function sameFrequency(n1,n2){
  // good luck. Add any arguments you deem necessary.
  const num1 = n1.toString();
  const num2 = n2.toString();
  if (num1.length !== num2.length) return false;
  const obj = {};
  
  for(const char of num1){
      obj[char] ? obj[char]++ : obj[char] = 1;
  }
  
  for(const char of num2){
      if(!obj[char]) {
          return false;
      } else {
          obj[char]--
      }
  }
  
  return true
}


///are there duplicates

function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  let arr = Array.from(arguments);
  const obj = {};
  
  arr.forEach(ele => obj[ele] ? obj[ele]++ : obj[ele] = 1);
  return Object.values(obj).some(ele => ele > 1)
}


// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}
// areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}


///avg pair


function averagePair(arr, target){
  // add whatever parameters you deem necessary - good luck!
  if (!arr.length || target === null) return false;
  let i = 0;
  let j = arr.length - 1;
  while (i < j){
      if ((arr[i] + arr[j]) / 2 === target) {
          return true;
      } else if ((arr[i] + arr[j]) / 2 > target) {
          j--
      } else {
          i++
      }
  }
  
  return false;
}

///is subseq

function isSubsequence(s1,s2) {
  // good luck. Add any arguments you deem necessary.
  let str = "";
  let i = 0;
  let j = 0;
  while (j < s2.length) {
      if (s1[i] === s2[j]) {
          str += s2[j];
          i++;
          j++;
      } else {
          j++;
      }
      
      if(str === s1) return true;
  }
  
  return false;
}


///max subarray

function maxSubarraySum(arr, n){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < n) return null;
  
  let max = -Infinity;
  let tempo = arr.slice(0, n).reduce((a,b)=>a+b)
  let i = 0;
  while (i < arr.length - n + 1){
    let temp = tempo - arr[i] + arr[i + n];
    max = temp > max ? temp : max;
    tempo = temp;
    i++;
  }
  return max;
}