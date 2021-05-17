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

// console.log(findLongestSubstring('helloworld'))


//binary search

function binarySearch(arr, t) {
  // add whatever parameters you deem necessary - good luck!
  if (!arr.length) return -1;

  const mid = Math.floor(arr.length / 2);

  if (t < arr[mid]) {
    return binarySearch(arr.slice(0, mid), t);
  } else if (t > arr[mid]) {
    const res = binarySearch(arr.slice(mid + 1), t);
    return res !== -1 ? (res + mid + 1) : -1;
  } else {
    return mid;
  }
}


///naive search find patterns in a sentence

let str = 'hello my name is bob fisher';
let patt = 'is';
function naivePatternSearch(s, p) {
  let counter = 0;
  let start = 0;
  let end = p.length;
  while(start < s.length - p.length + 1){
    if (p === s.slice(start, end)) counter++;
    start++;
    end++;    
  }

  return counter;
}

// console.log(naivePatternSearch(str, patt))
// console.log(naivePatternSearch(str, 'er'))
// console.log(naivePatternSearch(str, 'bob'))
// console.log(naivePatternSearch(str, 'isher'))

///buble sort

function bubleSort(arr){
  let noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; j++){
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// console.log(bubleSort([1,2,41,51,25,6,73,8,89,90,-2,3,-6]))


//flipping image

var flipAndInvertImage = function(image) {
    return image.reduce((res, arr) => {
        let newA = arr.reverse().map(ele => ele === 0 ? 1 : 0);
        res.push(newA);
        return res;
    }, [])
};


///longest continious sequence

var findLengthOfLCIS = function(nums) {
    let start = 0;
    let end = 1;
    let res = 0;
    
    let temp = 1;
    while(start < nums.length){
        if(nums[end] > nums[start]){
            temp++;
        } else {
            res = res < temp ? temp : res;
            temp = 1;
        }
        
        start++;
        end++;
        
    }
    
    return res;
};

//selection Sort

function selectionSort(arr){

  for(let i = 0; i < arr.length; i++){
    let min = i;
    for(let j = i + 1; j < arr.length; j++){
      if (arr[min] > arr[j]) min = j;
    }
    if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr
}

// console.log(selectionSort([2,3,1,-1,5,10,23,13,-3]));
// console.log(selectionSort([]));

//insertion Sort

function insertionSort(arr){

  for(let i = 1; i < arr.length; i++){
    let cur = arr[i];
    let idx; //1
    for(let j = i - 1; j >= 0 && arr[j] > cur; j--){
      idx = j
      arr[j+1] = arr[j];
    }
    arr[idx] = cur;
  }
  return arr;
}

//                                  i
// console.log(insertionSort([4, 3, 1, 2]))
//                            j
///                        1, 2, 3, 4



function productify(arr){
	let newArr = []; //24

  for(let i = 0; i < arr.length; i++) {
		let tempArr = arr.splice(i, 1);     ///remove it
		newArr.push(tempArr.reduce((a,b) => a*b))
	}

  return (newArr.length) ? newArr : null; 
}

// console.log(productify([1,2,3]))



function mergeSort(arr){
  if(arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(arr1, arr2){
  const sorted = [];
  while(arr1.length && arr2.length){
    if(arr1[0] < arr2[0]){
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }
  return sorted.concat(arr1, arr2);
}

// console.log(mergeSort([4,2,1,5,6,3]))

function quickSort(arr){
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const pivot = arr.splice(mid, 1);
  const left = quickSort(arr.filter(ele => ele <= pivot));
  const right = quickSort(arr.filter(ele => ele > pivot));
  return left.concat(pivot, right);
}


// console.log(quickSort([4,2,1,5,6,3]))
// console.log(quickSort([4,2,1,5,6,55,123,51,661,2,3,61,-2,-12,3,19]))


///radix SORT

function getDigit(num, place){
  // if (num.toString().length <= place) return 0;

  // let n = num.toString().split('').reverse();
  // return parseInt(n[place]);

  //or 
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

}

function digitCount(num){
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr){
  let maxDigits = 0;
  for(let i = 0; i < arr.length; i++){
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits
}

function radixSort(arr){
  let times = mostDigits(arr);
  let i = 0;

  while(i < times){
    const newArr = Array.from({length: 10}, () => []);
    for(let j = 0; j < arr.length; j++){
      newArr[getDigit(arr[j], i)].push(arr[j])
    }
    arr = [].concat(...newArr);
    i++;
  }
  return arr;
}

console.log(getDigit(12, 1))
console.log(digitCount(1234))
console.log(mostDigits([1, 23, 34,567, 7892, 391823]))
console.log(radixSort([1, 23, 34,567, 7892, 391823, 1823, 1,5, 81,91, 23,4]))



