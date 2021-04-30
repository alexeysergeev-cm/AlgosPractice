// Given a string s, reverse the order of characters in
//  each word within a sentence while still preserving whitespace and initial word order.

var reverseWords = function(s) {
    return s.split(' ').map(word => {
        return word.split('').reverse().join('')
    }).join(' ')
};