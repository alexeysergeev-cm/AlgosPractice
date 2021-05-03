// Given a string s, reverse the order of characters in
//  each word within a sentence while still preserving whitespace and initial word order.

var reverseWords = function(s) {
    return s.split(' ').map(word => {
        return word.split('').reverse().join('')
    }).join(' ')
};


//reverse string 2

const flipEveryEvenChunk = (c, i) => i % 2 == 0 ? c.split("").reverse().join("") : c

var reverseStr = function(s, k) {
    
    let arr = [];
    for(let i = 0; i < s.length / k; i++) {
        arr.push(s.slice(i * k, i * k + k))
    }
    
    return arr.map(flipEveryEvenChunk).join("")
};



//sub sum 
//[-1, 2, 5] => 7
//[5, 3, -7, 6] => 8

const subSum = (arr) => {
    let currentSum = 0;
    let max = arr[0] || 0

    for(let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (max < currentSum) max = currentSum;
        if (currentSum < 0) currentSum = 0
    }

    return max
}

console.log(subSum([-1, 2, 5]))
console.log(subSum([5, 3, -7, 6]))
console.log(subSum([-9, -3, -7, -5]))