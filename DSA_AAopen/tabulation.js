// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end

function stepper(nums) {
    let table = new Array(nums.length).fill(false) // f, f, f, f, f
    table[0] = true;                               // t, f, f, f, f
    
    for (let i = 0; i < nums.length; i++){
        if (table[i] === true){
            for(let j = i + 1; j <= nums[i]; j++){
                table[j] = true 
            }
        }
    }
    return table[table.length - 1]
}

//does not work
// function stepper(nums, memo = {}) {
//     if (nums[nums.length - 1] in memo) return true;
//     // if (!nums.length) return true;

    
//     nums.forEach(num => {
//         memo[num] = true;
//         for(let i = 0; i < num; i++){
//             stepper(nums.slice(1), memo)
//         }
//     });

// }


// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end
function stepper(nums) {
    let table = new Array(nums.length).fill(false) // f, f, f, f, f
    table[0] = true;                               // t, f, f, f, f
    
    for (let i = 0; i < nums.length; i++){
        if (table[i] === true){
            for(let j = i + 1; j <= nums[i]; j++){
                table[j] = true 
            }
        }
    }
    return table[table.length - 1]
}

// function stepper(nums, memo = {}) {
//     if (nums[nums.length - 1] in memo) return true;
//     // if (!nums.length) return true;

    
//     nums.forEach(num => {
//         memo[num] = true;
//         for(let i = 0; i < num; i++){
//             stepper(nums.slice(1), memo)
//         }
//     });

// }


// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// console.log(maxNonAdjacentSum([2, 7, 9, 3, 4]))   // => 15, because 2 + 9 + 4
// console.log(maxNonAdjacentSum([4, 2, 1, 6]))      // => 10, because 4 + 6

function maxNonAdjacentSumHelper(nums, memo) {
    if (memo[nums.length]) return memo[nums.length]
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]

    const sum =  Math.max(
        maxNonAdjacentSumHelper(nums.slice(2), memo) + nums[0],
        maxNonAdjacentSumHelper(nums.slice(3), memo) + nums[1]
    )

    memo[nums.length] = sum 
    return sum 
}

function maxNonAdjacentSum(nums) {
    return maxNonAdjacentSumHelper(nums, {})
}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// console.log(minChange([1, 2, 5], 11))         // => 3, because 5 + 5 + 1 = 11
// console.log(minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// console.log(minChange([1, 5, 10, 25], 15))   // => 2, because 10 + 5 = 15
console.log(minChange([2, 3, 5], 1))   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount, memo = {}) {

    // let table = new Array(coins.length)
    // table[0] = coins[coins.length - 1]
    if (amount in memo) return memo[amount]
    if (coins.length === 0) return amount === 0 ? 0 : -1;
    if (amount < 0) return -1;
    if (amount === 0) return 0;


    let subproblems = coins.map(coin => minChange(coins, amount - coin, memo)).filter(x => x >= 0)
    // console.log(subproblems)

    let result = subproblems.length === 0 ? -1 : Math.min(...subproblems) + 1;
    memo[amount] = result
    return result
}
