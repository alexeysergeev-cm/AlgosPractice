
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

///final prices

var finalPrices = function(prices) {
    
    return prices.reduce((acc,val, i) => {
        
        const newArr = prices.slice(i + 1);
        
        for(let j = 0; j < newArr.length; j++){
            if (newArr[j] <= val){
                acc.push(val - newArr[j]);
                return acc;
            }
        }
        
        acc.push(val);
        return acc;
    }, [])
};


//trim mean

var trimMean = function(arr) {
    let newA = arr.sort((a,b)=>a-b);
    let numToDelete = newA.length * 0.05;
    newA = newA.slice(numToDelete, newA.length - numToDelete);

    return (newA.reduce((a,b)=>a+b) / newA.length);
};

//can jump

var canJump = function(nums) {
    let max = 0;
    
    for(let i = 0; i < nums.length; i++){
        if (i > max) return false;
        if (i + nums[i] >= nums.length-1) return true;
        max = Math.max(max, i+nums[i])
    }
    
};


///replace elemenets

var replaceElements = function (arr) {
    return arr.map((ele, i) => {
        if (i === arr.length - 1) return ele = -1;
        else return ele = Math.max(...arr.slice(i + 1));
    })
};


///remove ele in place with O(1)
var removeElement = function(nums, val) {
    
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] === val){
            nums.splice(i, 1);
        }
    }
    return nums.length
};

///remove dups from linked list

var deleteDuplicates = function(head) {
    
    let cur = head

    while (cur && cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
        
    }
    
    return head
};


///linkledlist has cycle fast adn slow pointer

var hasCycle = function(head) {
    
    let s = head
    let f = head
    
    while(f && f.next){
        s = s.next;
        f = f.next.next
        if(s === f) return true;
    }
    return false;
    
};


//DiString
var diStringMatch = function(s) {
    //min ele = 0
    //max ele == s.length;
    //keep track of min /max?
    //iterate over s, --max ++max;
    
    let min = 0; //2
    let max = s.length; //2
    let res = [];
    let i = 0;
    while(i <= s.length){
        if (s[i] === 'I') res.push(min), min++;
        if (s[i] === 'D') res.push(max), max--;
        if (s[i] === undefined) res.push(min)
        i++;
    }
    //res[s.length] = min
    return res;
};

///height checker
var heightChecker = function(heights) {
    let sorted = heights.slice();
    sorted.sort((a,b)=>a-b);
    
    return sorted.reduce((acc,val,i)=>{
        if(val !== heights[i]) acc++;
        return acc;
    }, 0)
};


//build stack array

var buildArray = function (target, n) {
    //create var res = []
    //create var i = 1;
    //iterate tru target arr
    //if target[j] == i push
    //else push, pop
    //i++
    //return res

    const res = [];

    let i = 1;
    let j = 0;
    while (j < n) {
        if (target[j] === undefined) break;
        if (target[j] === i) {
            res.push('Push')
            j++
        } else {
            res.push('Push', 'Pop')
        }
        i++
    }

    return res
};


///sort by bits 1's
var sortByBits = function(arr) {
    const bits = (num) => {
        let n = (num>>>0).toString(2).match(/1/g)
        return n ? n.length : 0; 
    }
    
    return arr.sort((a,b) => bits(a)-bits(b) || a-b)
}


///do unique occurances 

var uniqueOccurrences = function(arr) {
    //iterate and count to an object
    //iterate over obj and see if value been seen?
    
    let obj = {}
    
    arr.forEach(e => {
        obj[e] ? obj[e]++ : obj[e] = 1
    })
    
    let res = Object.values(obj)
    
    return res.length === new Set(res).size
};


//implement strStr()

var strStr = function (haystack, needle) {
    if (!needle.length) return 0;
    if (!haystack.includes(needle[0])) return -1;

    const len = needle.length;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if (haystack.slice(i, i + len) === needle) return i;
        }
    }
    return -1;
};



/// using Bitwise XOR 
/// problem : Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Great solution, Bitwise XOR little trick to understand. But finally got it.
// for example [4,1,2,1,2]
// 4^1 = 4+1 =5
// 5^2=5+2=7
// 7^1= 7-1=6(because we already added 1, as per XOR logic it will subtract)
// Similarly 6^2 = 6-2 =4 (because we already added 2, now we have to subtract it as per XOR operator)

var singleNumber = function(nums) {
    let a = 0;
    for(const num of nums){
      a ^= num;
    }
    return a;
};



///inorder Traversal of binary tree

var inorderTraversal = function(root) {
  if(!root) return [];
  let result = []
  
  function dfs(node){
    if(node !== null){
      dfs(node.left)
      result.push(node.val)
      dfs(node.right)
    }
  }
  
  dfs(root)
  return result;
};



///check if 2 trees are the same

var isSameTree = function(p, q) {
    
    if(p === null && q === null) return true;
    if(p === null || q === null) return false;
    if(p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) 
    
    
};

//dfs sum path
var hasPathSum = function(root, targetSum, sum=0) {
    if(!root) return false
    
    if(!root.left && !root.right ) {
        return root.val + sum === targetSum
    }
    
    let left = hasPathSum(root.left, targetSum, sum+root.val)
    let right = hasPathSum(root.right, targetSum, sum+root.val)
    
    return left || right 
};


//max depth

var maxDepth = function (root, depth = 1) {
    if (!root) return 0;

    const left = maxDepth(root.left, depth + 1) || depth
    const right = maxDepth(root.right, depth + 1) || depth

    return Math.max(left, right);
};


//invert tree dfs

var invertTree = function(root) {
    if(!root) return null;
    
    
    const left = invertTree(root.left);
    const right = invertTree(root.right);

    root.left = right;
    root.right = left;
    return root;
    
};


///symetric tree

var isSymmetric = function (root) {
    return isMirror(root, root);
};

const isMirror = (node1, node2) => {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    return (node1.val === node2.val) && isMirror(node1.right, node2.left) && isMirror(node1.left, node2.right)
}


//total monay

var totalMoney = function (n) {
    // m,t,w,t,f,s,s,

    //i = 0
    // i< n
    //sum = 0;
    // sum++, i++
    //start = 1;
    //monday = 1;
    //cursum = 0

    let totalSum = 0;
    let mondays = 1;
    let deposit = 1;
    let i = 1;
    while (i <= n) {
        totalSum += deposit;
        deposit++
        if (i % 7 === 0) {
            mondays++;
            deposit = mondays;
        }
        i++
    }
    return totalSum
};

///add two numbers 

var addTwoNumbers = function(l1, l2) {
    let p = l1;
    let q = l2;
    let dummyHead = new ListNode(0);
    let cur = dummyHead;
    let carry = 0;
    
    while(p || q){
        let x = p ? p.val : 0;
        let y = q ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if(p) p = p.next;
        if(q) q = q.next;
    }  
    if(carry > 0){
        cur.next = new ListNode(carry)
    }
    return dummyHead.next;
}

//container with most water
var maxArea = function(height) {
    
    let max = 0;
    // for(let i = 0; i< height.length; i++){
    //     for(let j = 0; j < height.length; j++) {
    //         if(height[i] < height[j]){
    //             continue;
    //         }else{
    //             const area = Math.abs(i-j) * height[j];
    //             max = max > area ? max : area;
    //         }
    //     }
    // }
    // return max;
    
    let i = 0;
    let j = height.length-1;
    while(i < j){
        max = Math.max(max, Math.min(height[i], height[j]) * (j-i));
        if(height[i] < height[j]){
            i++
        } else {
            j--;
        }
    }
    return max;
}


/// three sum 
var threeSum = function(nums) {      //    i  x     y
    nums = nums.sort((a,b) => a-b); //[-4,-1,-1,0,1,2]
    const res =[];
    let seen = new Set()
    for(let i = 0; i < nums.length; i++){
        let x = i + 1;
        let y = nums.length-1;
        
        while(x < y){
            let sum = nums[i] + nums[x] + nums[y]
            if(sum > 0) {
                y--;
            } else if (sum < 0) {
                x++;
            } else {
                let triplet = [nums[i],nums[x],nums[y]];
                if (seen.has(JSON.stringify(triplet))) {
                    x++;
                    continue;
                }
                seen.add(JSON.stringify(triplet));
                res.push(triplet)
                x++;
            }
        }
        
    }
    return res
};


///letter combo of a phone number
//takeaways:
// - can pass result arr into dfs
// - start '' empty str and build it
// - pass idx
// - map letters

var letterCombinations = function(digits) {
    if(!digits.length) return [];
    const res = [];
    const letters = { 
        0: "",
        1: "",
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    }
    
    dfs(digits, letters, res, "", 0); 
    
    return res;
};

const dfs = (digits, letters, res, str, idx) => { //str =ad, idx = 2
    if(idx === digits.length) { //true
        res.push(str); //['ad', 'ae', 'af']
        return;
    }
    
    let digit = digits[idx]; //3
    let chars = letters[digit];//'def'
    
    for(const char of chars){ //abc
        str += char; //b
        dfs(digits, letters, res, str, idx+1); //idx = 0
        str = str.slice(0, str.length-1); //delete ae => a
    }
}


///max diff

// function maxDiff(arr){
//     const newArr = arr.slice().sort((a,b) => a-b);
//     console.log(newArr)


//     for(const num of newArr){

//     }
// }

// console.log(maxDiff([2, 3, 10, 6, 4, 8, 1])) //=>8



///remove nth node from end

var removeNthFromEnd = function(head, n) {
    if(!head.next) return null;
    
    //check the length of Linked List
    let len = 1;
    let cur = head
    while(cur.next){
        cur = cur.next
        len++
    }
    
    // identify the index of a node to delete
    const idx = len-n;
    
    //keep track of previous node
    let prev = null; 
    let curN = head; 
    let i = 0 
    //iterate until find a node to delete
    while(idx !== i){
        prev = curN;
        curN = curN.next
        i++;
    }
    //edge case if node to delete happens to be the head;
    let newHead;
    // if prev is null, it means we deleting the head;
    prev ? prev.next = curN.next : newHead = curN.next;
    curN.next = null;
    
    return !newHead ? head : newHead;
};

/// generate parenthesis

var generateParenthesis = function(n) {
    const res = []; // '((()))', '(()())', '(())()', '()(())', '()()()'
    dfs(res, "", 0, 0, n);
    return res;
};

const dfs = (res, str, open, close, max) => { // '()()()', open = 1, close = 1
    if(str.length === max*2){
        res.push(str);
        return;
    }
    
    if(open < max){
        str += '('
        dfs(res, str, open + 1, close, max);
        str = str.slice(0, str.length-1); 
    }
    
    if(close < open){
        str += ')'
        dfs(res, str, open, close + 1, max);
        str = str.slice(0, str.length-1);
    }
}


///Merge k Sorted Lists

var mergeKLists = function(lists) {
    if(!lists.length) return null;
    let merged = new ListNode();
    
    let vals = [];
    let nodesAmount = lists.length;
    let i = 0;
    while(i < nodesAmount){
        let cur = lists[i];
        while(cur){
            vals.push(cur.val);
            cur = cur.next;
        }
        i++;
    }
    vals = vals.sort((a,b) => a-b);
    let cur = merged;
    for(const val of vals){
        const newNode = new ListNode(val);
        cur.next = newNode;
        cur = cur.next;
    }
    
    return merged.next;
};