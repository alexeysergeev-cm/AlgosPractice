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