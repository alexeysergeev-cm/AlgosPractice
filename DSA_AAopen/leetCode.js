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


