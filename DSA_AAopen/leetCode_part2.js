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



//truncate

var truncateSentence = function(s, k) {
    return s.split(' ').slice(0, k).join(' ')
};



//longest palindrome

var longestPalindrome = function(s) {
  
    let palin = ""
    
    for(let i = 0; i < s.length; i++){
        let j = s.length
        
        while (j >= i) {
            let w = s.slice(i, j)
            if (isPalin(w)) {
                if (palin.length < w.length) {
                    palin = w
                }
            }
            j--
        }
    }

    return palin;
};
    
    
function isPalin(s){
    
    let j = s.length - 1
    for(let i = 0; i < s.length; i++){
        if (s[i] !== s[j]) return false;
        j--
    }
    
    return true
}



//find destination path

var destCity = function(paths) {
    
    let f;
    let set = new Set();
    
    for (let i = 0;i < paths.length; i++){
        set.add(paths[i][0]);
    }
    
    for (let i = 0; i < paths.length; i++){
         if (!set.has(paths[i][1])){
               f = paths[i][1];
               break;
         }
    }
    return f;  
    
};


///max 69 number

var maximum69Number  = function(num) {

    let numStr = num.toString();
    for (let i = 0; i < numStr.length; i++){
        if (numStr[i] !== '9') return parseInt(numStr.slice(0, i) + '9' + numStr.slice(i + 1))
    }
    
    return parseInt(numStr)
    
};