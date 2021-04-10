
function fib(n, memo = {}){
  
  if(n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  // return fib(n-1) + fib(n-2)
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

// console.log(fib(100))


// Write a function, lucasNumber(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively!
//
// Examples:
//
// lucasNumber(0)   // => 2
// lucasNumber(1)   // => 1
// lucasNumber(2)   // => 3
// lucasNumber(3)   // => 4
// lucasNumber(5)   // => 11
// lucasNumber(9)   // => 76
function lucasNumber(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 0) return 2;
    if (n === 1) return 1; 

    memo[n] = lucasNumber(n - 1) + lucasNumber(n - 2)
    return memo[n]
}


// Write a function, sumArray(array), that takes in an array of numbers.
// The function should return the total sum of the elements.
// 
// Solve this recursively!
//
// Examples:
//
// sumArray([])             // => 0
// sumArray([5])            // => 5
// sumArray([5, 2])         // => 7
// console.log(sumArray([4, 10, -1, 2])) // => 15
function sumArray(array) {

    if (!array.length) return 0;
    let sum = array.pop()

    return sum + sumArray(array)
}



// Write a function, reverseString(str), that takes in a string.
// The function should return the string with it's characters in reverse order.
//
// Solve this recursively!
//
// Examples:
// 
// reverseString("")            // => ""
// reverseString("c")           // => "c"
// reverseString("internet")    // => "tenretni"
// reverseString("friends")     // => "sdneirf"
function reverseString(str) {
    if (!str.length) return "";

    let newStr = ""
    for(let i = 0; i < str.length; i++){
        newStr += str[str.length - 1 - i]
    }

    return newStr
}


// Write a function, pow(base, exponent), that takes in two numbers.
// The function should calculate the base raised to the exponent power.
//
// Note: 
// A negative exponent can be calculate by taking the reciprocal of the positive exponent.
// That is, pow(2, -5) is equal to 1 / pow(2, 5)
// 
// Solve this recursively!
//
// Examples:
//
// pow(2, 0)    // => 1
// pow(2, 1)    // => 2
// pow(2, 5)    // => 32
// pow(3, 4)    // => 81
// pow(2, -5)   // => 0.03125
function pow(base, exponent) {

    if (exponent === 0) return 1;
    if (exponent === 1) return base;

    if (exponent > 0){
        return base * pow(base, exponent - 1)
    } else {
        return 1 / base * pow(base, exponent + 1)
    }

}


// A 1-dimensional array is also known as a flattened array.
// Write a method, flatten(data), that accepts a single argument. The
// method should take in an array of any dimension and return the flattened
// version of that array. Solve this recursively.
//   
// Hint:
//  - if the argument is not an array, then we have reached the base case
//  - look up the documentation for how to check if data is an array or not
//
// Examples:
//
// array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
// flatten(array_1)      // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
// flatten(array_2)      // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]
//
// flatten('base case')  // => [ 'base case' ]
//
// Another Hint:
//
// From the last example, you may be confused. We said that the method takes
// in an array as an arg, but we passed it a string?
// If data is not an array, then we can consider it as a 0-dimensional array.
//     0-dimensional array: 'some data'
//     1-dimensional array: ['some data']
//     2-dimensional array: [['some data']]
//     3-dimensional array: [[['some data']]]
function flatten(data) {
    if (!Array.isArray(data)) return [data];

    let res = []
    data.forEach(ele => {
        (Array.isArray(ele)) ? res = res.concat(flatten(ele)) : res.push(ele)
    })
    return res
}




// Write a function, fileFinder(directories, targetFile), that accepts an object representing directories and a string respresenting a filename.
// The function should return true, if the file is contained anywhere in the given directories.
// Note that directory names will begin with '/', but file names will not.
// 
// Example:
//
let desktop = {
    '/images': {
        'app_academy_logo.svg': null,
        '/parks': {
            'yosemite.jpeg': null,
            'acadia.jpeg': null,
            'yellowstone.png': null
        },
        '/pets': {
            'trixie_lou.jpeg': null,
            'rolo.jpeg': null,
            'opal.jpeg': null,
            'diana.jpeg': null,
        }
    },
    '/music': {
        'hey_programmers.mp3': null,
        '/genres': {
            '/rock': {
                'everlong.flac': null,
                'livin_on_a_prayer.mp3': null
            },
            '/hip_hop': {
                'express_yourself.wav': null,
                'ny_state_of_mind.mp3': null
            }
        }
    }
};
//
// console.log(fileFinder(desktop, 'app_academy_logo.svg'));     // => true
// console.log(fileFinder(desktop, 'everlong.flac'));            // => true
// console.log(fileFinder(desktop, 'sequoia.jpeg'));             // => false
// console.log(fileFinder(desktop, 'seqsaduoia.jpeg'));             // => false
// console.log(fileFinder(desktop, 'express_yourself.wav'));             // => false

// function fileFinder(directories, targetFile) {
    
//   let stack = [directories]; //

//   while (stack.length > 0) {
//     currDir = stack.pop()
//     let children = Object.keys(currDir)

//     for (let i = 0; i < children.length; i++){
//       const currentFilename = children[i]
//       if (currentFilename === targetFile) return true;
//       if (is_dir(currentFilename)){
//         stack.push(currDir[currentFilename])
//       }
//     }
//   }

//   return false 
// }

//recurrsion
function fileFinder(directories, targetFile) {
    
  for (const [key, value] of Object.entries(directories)){
    
    if (is_dir(key)){
      if (fileFinder(value, targetFile)) {
        return true 
      }
    } else {
      if (key === targetFile) return true;
    }
  }

  return false 
}

function is_dir(dir){
  return dir[0] === '/';
}


// Write another function, pathFinder(directories, targetFile), that returns the path that contains the targetFile.
// If the targetFile is not found in the directories, then return null.
// You can assume the files are unique.
//
// Example using the same desktop from previously:
//
// pathFinder(desktop, 'trixie_lou.jpeg'));     // => '/images/pets/trixie_lou.jpeg'
// pathFinder(desktop, 'everlong.flac'));       // => '/music/genres/rock/everlong.flac'
// pathFinder(desktop, 'honeybadger.png'));     // => null
function pathFinder(directories, targetFile) {

}




// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code 
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//  
console.log(minChange([1, 2, 5], 11))         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount, memo = {}) {
  if (amount in memo) return memo[amount]
  if (amount <= 0) return 0

  let numsCoins = [];
  coins.forEach(coin => {
    if (coin <= amount) numsCoins.push(minChange(coins, amount - coin, memo) + 1)
  })

  console.log(numsCoins)
  console.log(Math.min(numsCoins))
  memo[amount] = Math.min(...numsCoins)
  return memo[amount]
}



function change(amount, coins, memo={}) {
  let key = amount + '-' + coins;
  if (key in memo) return memo[key]
  if (amount === 0) return 1;

  let currCoin = coins[coins.length - 1];
  let total = 0;

  for (let i = 0; i * currCoin <= amount; i++){
    total += change(amount - i * currCoin, coins.slice(0, -1), memo) //coins.pop() does not work
  }

  memo[key] = total
  return memo[key]
};

// console.log(change(50, [1, 2, 5, 6]))



//insertion sort [2,1,3,4]

function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {

    const currElement = arr[i];
    let j = i - 1;
    while (j >= 0 && currElement < arr[j]) { // -1
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currElement;
  }
  return arr;
}

// console.log(insertionSort([2,1,4,3]))