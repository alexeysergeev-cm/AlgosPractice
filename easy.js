//string matching

var stringMatching = function(words) {
    const obj = {};
    words.forEach(w => obj[w] = true);
    
    let res = [];
    for(const key in obj){
        for(const w of words){
            
            if (key.includes(w) && !res.includes(w) && w !== key) { 
                res.push(w); 
            }
        }
    }
    return res;
};

//one liner

const stringMatching = words =>
  words.filter(n => words.some(h => h !== n && h.includes(n)));



// find intersection between 2 arrays

var intersection = function(nums1, nums2) {
    nums1.sort((a,b) => a-b);
    nums2.sort((a,b) => a-b);
    
    let result = [];
    let x = 0, y = 0;
    
    while (x < nums1.length && y < nums2.length ) {
        if(nums1[x] === nums2[y] && !result.includes(nums1[x])) {
            result.push(nums1[x]);
            x++;
            y++;
        } else if (nums1[x] < nums2[y]){
            x++;
        } else {
            y++;
        }
    }
    
    return result;
};