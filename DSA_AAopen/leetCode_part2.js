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