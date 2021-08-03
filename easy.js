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