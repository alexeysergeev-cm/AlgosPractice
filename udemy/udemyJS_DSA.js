function addUpto(n){
  return n * (n + 1) / 2
}

let t1 = new Date()
addUpto(1000000000000)
let t2 = new Date()

// console.log(`Time elapsed: ${(t2 - t1) / 1000 } seconds.`)




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



//sliding Window - minSubArrayLen;

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}


//find longest substring in O(n)

//'helloworld' => 5
// i

function findLongestSubstring(str){

  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
    console.log(seen, longest)
  }
  return longest;
}

console.log(findLongestSubstring('helloworld'))