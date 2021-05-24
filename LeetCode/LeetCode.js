
// SQL update salary

// `
// UPDATE salary 
// SET 
//     sex = CASE sex
//         WHEN 'm' THEN 'f'
//         ELSE 'm'
//     END
// `

// `
// UPDATE salary
// SET sex = IF(sex = 'm', 'f', 'm')
// `


/// halves alike

var halvesAreAlike = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    
    let mid = s.length / 2
    let count = 0
    s.slice(0, mid).split('').forEach(ele => {if (vowels.includes(ele)) count++})
    s.slice(mid).split('').forEach(ele => {if (vowels.includes(ele)) count--})
    
    return count === 0
};


//workd on valid Ip adress

var validIPAddress = function(IP) {
    let myIp = IP.includes('.') ? '4' : IP.includes(':') ? '6' : 'Neither';
    let ipAlpha = ['0','1','2','3', '4', '5','6','7','8','9','0', 'a','b','c','d','e','f']
    let final = ''
    if (myIp === '4'){
        
        let arr = IP.split('.');
        if (arr.length !== 4) return 'Neither';
        
        arr.forEach(ele => {
            if (ele.length > 1 && ele[0] === '0') final = 'Neither';
            ele.split('').forEach(ele => { if (isNaN(ele)) final = 'Neither'})
            console.log(final)
        });
        if (final === 'Neither') return final;
        
        let res = arr.every(ele => (parseInt(ele) >= 0 && parseInt(ele) <= 255));

        return res ? 'IPv4' : 'Neither';
        
    } else if (myIp === '6'){
        
        let arr = IP.split(':')
        if (arr.length !== 8) return 'Neither';
        arr.forEach(ele => {
            if (ele.length > 4 || ele.length < 1) final = 'Neither';
            ele.split('').forEach(ele => {
                if (!ipAlpha.includes(ele.toLowerCase())) final = 'Neither';
            })            
        });
            if (final === 'Neither') return final;
            return 'IPv6'
        
    } else {
        return 'Neither'
    }
};


/// selfDividing nums

var selfDividingNumbers = function(left, right) {
    let final = [];
    
    let cur = left
    let flag = true
    while (cur <= right) {
        const num = cur.toString()
        if (num.length > 1) {
            num.split('').forEach(ele => {if (cur % parseInt(ele) !== 0) flag = false})
            flag ? final.push(cur) : flag = true
        } else {
            final.push(cur)
        }
        cur++
    }
    
    return final;
};


///pefrect num

var checkPerfectNumber = function(num) {
    if (num === 1) return false
    let final = []
    
    let half = num / 2
    let i = 1
    while (i <= half) {
        if (num % i === 0) final.push(i);
        i++;
    }
    
    return final.reduce((a,b) => a+b) === num
};


//count negative numbers in Matrix

var countNegatives = function(grid) {
    
    let count = 0;
    const len = grid.length
    const lenInner = grid[0].length
    for(let i = 0; i < len; i++){
        for(let j = 0; j < lenInner; j++){
            if (grid[i][j] < 0) {
                count += (lenInner - j) 
                break;
            }
            console.log(grid[i][j])
        }
    }
    
    return count;
};


///big country SQL

// `
// SELECT 
//     name, population, area
// FROM 
//     World
// WHERE 
//     area > 3000000 OR population > 25000000 

// `

///decrypt string 

var freqAlphabets = function(s) {
     let alpha = "abcdefghijklmnopqrstuvwxyz".split('')

     let str = ""
     for(let i = 0; i < s.length; i++){
        let idx;
        if (s[i + 2] === '#'){
            idx = parseInt(s.slice(i, i + 2))
            i += 2
        } else {
             idx = parseInt(s[i]);
        }
             str += alpha[idx - 1];
     }
         
    
    return str;
};



//max num product in th earr

var maxProduct = function(nums) {
    
    const arr = nums.sort((a,b) => a-b);
    return (arr[arr.length - 1] - 1) * (arr[arr.length - 2] - 1)
    
};

//find pivot index

var pivotIndex = function(nums) {
    //iterate thru arr
    // note: consider left && right edge == 0 
    //at each index check left sum === right sum of the index...
    // if yes -> return index 
    //if no -> continue seraching
    
    for(let i = 0; i < nums.length; i++){
        let sum1 = nums.slice(0, i).reduce((a,b) => a+b, 0); 
        let sum2 = nums.slice(i + 1).reduce((a,b) => a+b, 0);
        if (sum1 === sum2) return i;
    }
    
    return -1
    
    //return -1 if not found
};


///merge trees

var mergeTrees = function(root1, root2) {
    //create a new rootNode to return
    
    //perform DFS for both trees
    //once at the bottom check if nodes overlapping, if yes -> combine vals
    //if not -> create a new node with that val
    //if both trees have no node at that level -> create null node 
        
    if(root1 === null) return root2
    if(root2 === null) return root1
    
    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right)
    return root1
};


//find N unique ints 

var sumZero = function(n) {
    const pivot = -(Math.floor(n/2));
    
    let newArr = [pivot];
    let cur = pivot;
    
    while (newArr.length < n) {
        if (n % 2) {
            newArr.push(++cur);
        } else {
            cur++
            if (cur !== 0) newArr.push(cur);
        }
    }
    return newArr
};

///slowest Key

var slowestKey = function(releaseTimes, keysPressed) {
    //iterate trhu times;
    
    let maxSec = releaseTimes[0];
    let curL = keysPressed[0];
    
    for(let i = 1; i < releaseTimes.length; i++){
        let flag = false;
        let curSec = releaseTimes[i] - releaseTimes[i - 1] 
        curSec > maxSec ? [maxSec = curSec, curL = keysPressed[i]] : flag = false
        maxSec === curSec ? curL < keysPressed[i] ? curL = keysPressed[i] : flag = false : flag = false;
    }
    
    return curL
};

//sum of Unique

var sumOfUnique = function(nums) {
    //iterate thru nums 
    //count appearance of each num and store in obj
    //extract only keys that = 1;
    //reduce the arr
    
    let obj = {}
    nums.forEach(ele => {
        obj[ele] ? obj[ele]++ : obj[ele] = 1 
    })

    
    return Object.keys(obj).filter(k => obj[k] === 1).reduce((a,b)=>parseInt(a) + parseInt(b), 0);
};


//word pattern

var wordPattern = function(pattern, s) {
    // create obj to keep track of elements
    // split the s
    // create i to monitor index in s 
    // iterate thru pattern, set the flag to flase
    // if obj has pattern[i], check obj[char] === arr[i], if not return false, else flag = true;
    // if obj does not have pattern[i], check if values of obj include arr[i], if yes return false, else assign;
    // check the length of pattern and s.plit(), if not eq => false
    // return true
    
    let obj = {};
    let arr = s.split(' ');
    let i = 0
    for(const char of pattern) {
        let flag = true;
        obj[char] ? obj[char] === arr[i] ? flag = true : flag = false : Object.values(obj).includes(arr[i]) ? flag = false : obj[char] = arr[i]
        i++
        if (!flag) return false
    }
    
    if (pattern.length !== arr.length) return false
    return true
};

//the same arr1[i] === arr2[i]^2 arrays

function sameArr(arr1, arr2) {
    //store all the values from arr2 as keys in obj
    //iterate tru arr1 and square it to see if it has key in obj
    //keep track of how many keys in arr2;
    
    if(arr1.length !== arr2.length) return false;

    let obj = {};
    arr2.forEach(ele => {
        obj[ele] ? obj[ele]++ : obj[ele] = 1;
    })

    for(const ele of arr1){
        let squaredEle = ele*ele
        if (!obj[squaredEle]) return false;
        obj[squaredEle]--;
        if (obj[squaredEle] === 0) delete obj[squaredEle];
    }

    return true
}

// console.log(sameArr([1,2,3], [1,4,9]))
// console.log(sameArr([1,2,3], [1,4,4]))
// console.log(sameArr([1,2,3,2], [1,9,4,4]))


///anagrams 

function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) return false;
  let obj = {};
  
  for(const char of str1) {
      obj[char] ? obj[char]++ : obj[char] = 1;
  }
  
  for(const char of str2){
      if (obj[char]) {
          obj[char]--;
      } else {
          return false;
      }
  }
  
//   return Object.values(obj).every(val => val === 0);
  return true
}

//obj = {'m':0} => obj[m] ? => falsy
console.log(validAnagram('hello', 'ollah'))


// count unique Values - multiple pointers

function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  if (!arr.length) return 0;
  let i = 0;
  let j = i + 1;
  while(j < arr.length){
    (arr[i] !== arr[j]) ? [i++, arr[i] = arr[j], j++] : j++    
  }
  console.log(arr)
  return i+1;
}


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


/// min Operations

var minOperations = function (nums) {
    if (nums.length === 1) return 0;

    let count = 0;
    nums.forEach((n, i) => {
        if (n >= nums[i + 1]) {
            let temp = (n - nums[i + 1]) + 1
            count += temp
            nums[i + 1] = temp + nums[i + 1]
        }
    })
    console.log(nums)
    return count;
};



///find even

var findNumbers = function (nums) {
    return nums.reduce((a, b) => { if (!(b.toString().length % 2)) a++; return a }, 0)


    // return nums.reduce((even, num) => {
    //     if (!(num.toString().length % 2)) {
    //         even++
    //     } 
    //     return even
    // }, 0)


};


//multiple pointers technique

var summaryRanges = function(nums) {
    const res = [];
    
    let start = 0;
    let i = 0;
    let j = 1;
    
    
    while (i < nums.length){
        if (nums[j] - nums[i] === 1){
            i++;
            j++;
        } else {
            if (nums[start] !== nums[i]){
                res.push(`${nums[start]}->${nums[i]}`)
            } else {
                res.push(`${nums[start]}`);
            }
            start = j;
            i = j;
            j++;
        }
    }
    
    return res
};


//nested Obj sum

function nestedEvenSum (obj, sum=0) {
  // add whatever parameters you deem necessary - good luck!
    for(let key in obj){
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum
}


//stringify nums 

function stringifyNumbers(obj){
    const newObj = {};
      for (var key in obj) {
        if (typeof obj[key] === 'number') {
          newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          newObj[key] = stringifyNumbers(obj[key]);
        } else {
          newObj[key] = obj[key];
        }
      }
      return newObj;  
}

//collect string in object

function collectStrings(obj){
    let newArr = [];
    
    for (let key in obj) {
        if (typeof obj[key] === 'string') newArr.push(obj[key]);
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            newArr = newArr.concat(collectStrings(obj[key]));
        }
    }
    
    return newArr;
}


/// max population in year range;

var maximumPopulation = function(logs) {
    
    let res = {};
    
    for(let i = 0; i < logs.length; i++)
        if(!res[logs[i][0]])
            for(let j = 0; j < logs.length; j++)
                if(logs[i][0] >= logs[j][0] && logs[i][0] < logs[j][1])
                    res[logs[i][0]] = (res[logs[i][0]] ? res[logs[i][0]] : 0) + 1;
    
    return Object.keys(res).sort((a,b) => res[b] - res[a])[0]
    
    
};


//search insert -> need to solve in O(log n);

var searchInsert = function(nums, target, l = nums.length) {
    let i = 0;
    while(nums[i] < target) i++;
    return i;
};


/// Replace All Digits with Characters

var replaceDigits = function(s) {
    return s.split('').reduce((acc,val,index) => {
        if (/[0-9]/.test(val)){
            acc += String.fromCharCode(s.charCodeAt(index-1) + parseInt(val)); 
        } else {
            acc += val
        }
        return acc
    })
}

let s = "a1c1e1"
console.log(replaceDigits(s))


///shifting letter brute force?
var shiftingLetters = function(s, shifts) {
    
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    
    let temp = s.split('');
    
    for(let i = 0; i < shifts.length; i++){ 
        let j = 0;
        while(j < i+1){
            temp[j] = alpha[(alpha.indexOf(temp[j]) + shifts[i]) % 26];
            j++
        }
    
    }
    
    return temp.join('')
};

///v 2

var shiftingLetters = function(s, shifts) {
    
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    let temp = s.split('');
    
    for(let i = 0; i < s.length; i++){
        let nums = shifts.slice(i).reduce((a,b) => a+b);
        temp[i] = alpha[(alpha.indexOf(temp[i]) + nums) % 26];
    }
    
    return temp.join('')
};


//middle node

var middleNode = function(head) {
    
    let ans = [];
    
    let cur = head
    while(cur.next){
        ans.push(cur)
        cur = cur.next
    }
    ans.push(cur);
    
    let i = Math.floor(ans.length / 2)
    return ans[i]
};

//slow and fast pointer

var middleNode = function(head) {
    slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};


///sorting the sent

var sortSentence = function(s) {
    return s.split(' ').reduce((acc,val) => {
        let newV = val.slice(0, val.length - 1);
        let idx = val[val.length - 1] - 1;
        acc[idx] = newV;
        return acc;
    }, []).join(' ');
};


//num of students doing hw
var busyStudent = function(startTime, endTime, queryTime) {
    return startTime.reduce((acc,v,i) => {
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) acc++;
        return acc
    }, 0)
};


// Sort Array By Parity

var sortArrayByParity = function(nums) {
    return nums.reduce((acc,val) => {
        if(val % 2){
            acc.push(val);
        } else{
            acc.unshift(val);
        }
        return acc;
    }, [])
};