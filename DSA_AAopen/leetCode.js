var countBinarySubstrings = function(s) {
    
    // iterate thru s
    // collect all the same grouped items
    // iterate thru collected Arr
    // compare adjecent nums and find min, then add to result
    
    let groups = [];
    
    let i = 1;
    let count = 1;
    let current = s[0];
    while (i < s.length) {
        if (current === s[i]) {
            count += 1
        } else {
            groups.push(count)
            current = s[i]
            count = 1
        }
        i += 1
    }
    groups.push(count)
    
    let sum = 0;
    for (let i = 0; i < groups.length - 1; i++) {
        sum += Math.min(groups[i], groups[i+1])
    }

    return sum;
};



// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".


var defangIPaddr = function(address) {
    return address.split('.').join('[.]')
};


// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// // For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: 
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 


var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    return res = candies.map(candie => (candie + extraCandies) >= max ? true : false )
};




// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 
var shuffle = function(nums, n) {
    let newArr = []
    
    let left = nums.slice(0, n);
    let right = nums.slice(n);
    i = 0;
    while  (i < n) {
        newArr.push(left[i])
        newArr.push(right[i])
        i++
    }
    return newArr
};

// const shuffle = function(nums, n) {
//     return nums.slice(0,n).reduce((acc, curr, i) => [...acc, curr, nums[i+n]],[])
// };


// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.


var numIdenticalPairs = function(nums) {
    let hash = {} // 1:3, 2:1, 3:2, 
    
    let count = 0; // 4
    for (let i = 0; i < nums.length; i++){
        if (hash[nums[i]]) {
            count += hash[nums[i]]
            hash[nums[i]]++
        } else {
            hash[nums[i]] = 1;
        }
        
    }
    return count
};


// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

// Internally you can think of this:

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;    // [1, 2, 2]
                                        //    i^ j^
    
    let i = 0;
    for(let j = 1; j < nums.length; j++){
        if (nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j]
        }
    }
    console.log(nums)
    return i + 1
};

// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.


var createTargetArray = function(nums, index) {
    let newArr = [];
    
    for (let i = 0; i < nums.length; i++){
        newArr.splice(index[i], 0, nums[i])    
    }
    
    return newArr;
};



var numJewelsInStones = function(jewels, stones) {
    let hash = {}
    let res = 0
    for(let i = 0; i < jewels.length;i++){
        hash[jewels[i]] = 1
    }
    
    for(let j = 0; j < stones.length; j++){
        if (hash[stones[j]]) res++
    }
    
    return res
    
    //this is faster ?! why


//     const jewelsArr = jewels.split('')
//     let res = 0;
    
    
//     for(let i = 0; i< stones.length; i++){
//         if (jewelsArr.includes(stones[i])) res++;        
//     }

        
//     return res;
};


// Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

// Implement the ParkingSystem class:

// ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
// bool addCar(int carType) Checks whether there is a parking space of 
// carType for the car that wants to get into the parking lot. carType can be of
//  three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively.
//  A car can only park in a parking space of its carType. If there is no space available, 
// return false, else park the car in that size space and return true.

var ParkingSystem = function(big, medium, small) {
     this.spots = [big, medium, small]
};

// /** 
//  * @param {number} carType
//  * @return {boolean}
//  */
ParkingSystem.prototype.addCar = function(carType) {

    const index = carType - 1;
    if (this.spots[index] > 0) {
        this.spots[index] = this.spots[index] - 1;
        return true;
    }
    
    return false;
};  


// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.


var balancedStringSplit = function(s) {
    let res = 0;
    
    let lCount = 0
    let rCount = 0;
    
    for(let i = 0; i < s.length; i++){
        if (s[i] === 'R'){
            rCount++;
        }else{
            lCount++;
        }
        if (s[i] === 'R' && lCount === rCount) {
            res++;
            lCount = 0
            rCount = 0
        }else if (s[i] === 'L' && rCount === lCount) {
            res++;
            rCount = 0
            lCount = 0
        }
    }
    return res
};


//Design an Ordered Stream
var OrderedStream = function(n) {
    this.stream = new Array(n)
    this.idx = 0
};


// /** 
//  * @param {number} idKey 
//  * @param {string} value
//  * @return {string[]}
//  */
OrderedStream.prototype.insert = function(idKey, value) {
    
    this.stream[idKey - 1] = value;
    
    const res = []
    while (this.stream[this.idx]){
        res.push(this.stream[this.idx++])
    }
   
    return res
    
};




// Given a non-negative integer num, return the number of steps to reduce it to zero.
//  If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.


var numberOfSteps = function(num) {
    
    let res = 0;
    while(num !== 0){
        num % 2 === 0 ? num /= 2 : num -= 1
        res++
    }
    return res
};


// Given an integer n and an integer start.
// Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
// Return the bitwise XOR of all elements of nums.


var xorOperation = function(n, start) {
  
    let res = 0;
    const binaryArr = new Array(n)
    
    i = 0;
    while(i < n){
        binaryArr[i] = start + 2*i
        res ^= binaryArr[i];
        i++;
    }
    
    return res
};



var smallerNumbersThanCurrent = function(nums) {
    let sorted = [...nums];
    sorted.sort((a,b) => a-b);
    
    let res = [];
    for(let i = 0; i < nums.length; i++){
        res.push(sorted.indexOf(nums[i]))
    }

    //let res = nums.map(num => sorted.indexOf(num))
    return res;
};


// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
// A string is represented by an array if the array elements concatenated in order forms the string.

var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('')
};


// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

var countConsistentStrings = function(allowed, words) {
    return res = words.map(word => word.split('').every(ele => allowed.includes(ele)) ? 1 : 0).filter(ele => ele === 1).length
};



///linked list has a cycle 
//brute force
var hasCycle = function(head) {
    let arr = []
    let curr = head
    while(curr){
        if (arr.includes(curr)) return true 
        arr.push(curr)
        curr = curr.next
    }
    return false
    
};

//also bruteforce but without arr
var hasCycle = function(head) {
    let slow = head
    let fast = head
    
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next;
        
        if (slow === fast) return true
    }
    
    return false 
    
};

//traverse a tree

class TreeNode {
    constructor(val){
        this.left = null;
        this.right = null;
        this.val = val
    }
}

function inOrderArray(root) {
    if(!root) return [];
    return [...inOrderArray(root.left),  root.val, ...inOrderArray(root.right)]
}

function postOrderArray(root) {
    if(!root) return [];
    return [...postOrderArray(root.left), ...postOrderArray(root.right), root.val]
}


//construct binary tree
function buildTree(preorder, inorder) {
    if (!preorder.length && !inorder.length) return null;

    let root = new TreeNode(preorder[0]);
    let rootIdx = inorder.indexOf(preorder[0]);

    let leftInorder = inorder.slice(0, rootIdx);
    let rightInorder = inorder.slice(rootIdx + 1);

    let leftPreorder = preorder.filter(val => leftInorder.includes(val));
    let rightPreorder = preorder.filter(val => rightInorder.includes(val));

    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
}

//shuffle array with indices
var restoreString = function(s, indices) {
  
    let res = [];
    s.split('').forEach((ele,i) => res[indices[i]] = ele);
    return res.join('')
};


//maximun units in the truck

var maximumUnits = function(boxTypes, truckSize) {
//     boxTypes.sort((a,b) => b[1]-a[1]);
//     let res = 0;
    
//     for(let i = 0; i < boxTypes.length; i++){
//         if (truckSize === 0) return res;
//         if (boxTypes[i][0] <= truckSize){
//             res += boxTypes[i][0] * boxTypes[i][1]
//             truckSize -= boxTypes[i][0];
//         } else {
//             boxTypes[i][0] -= (boxTypes[i][0] - truckSize);
//             res += boxTypes[i][0] * boxTypes[i][1]
//             truckSize -= boxTypes[i][0];
//         }
//     }
//     return res;
    
    
    boxTypes.sort((a,b) => b[1]-a[1]);

    let remaining = truckSize; //4, 3, 1
    let units = 0; // 7

    boxTypes.forEach((bType)=> {
        let take = ( bType[0] < remaining ) ? bType[0] : remaining;
        remaining-=take;
        units+=(bType[1] * take);

        if(remaining === 0) {
            return;
        }
    })

    return units;
};


//convert a number to a binary representaion
//6 = '110'
//10 = '1010'

function convert(num){
  if (num === 1) return '0'
  let res = []
  while(num >= 1){
    (num % 2 === 0) ? res.unshift('0') : res.unshift('1');
    num = Math.floor(num / 2)
  }

  return res.join('')
}
