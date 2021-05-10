
// SQL update salary

```
UPDATE salary 
SET 
    sex = CASE sex
        WHEN 'm' THEN 'f'
        ELSE 'm'
    END;
```

```
UPDATE salary
SET sex = IF(sex = 'm', 'f', 'm')
```


/// halves alike

var halvesAreAlike = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    
    let mid = s.length / 2
    let count = 0
    s.slice(0, mid).split('').forEach(ele => {if (vowels.includes(ele)) count++})
    s.slice(mid).split('').forEach(ele => {if (vowels.includes(ele)) count--})
    
    return count === 0
};


//workd on valid Ip adress

var validIPAddress = function(IP) {
    let myIp = IP.includes('.') ? '4' : IP.includes(':') ? '6' : 'Neither';
    let ipAlpha = ['0','1','2','3', '4', '5','6','7','8','9','0', 'a','b','c','d','e','f']
    let final = ''
    if (myIp === '4'){
        
        let arr = IP.split('.');
        if (arr.length !== 4) return 'Neither';
        
        arr.forEach(ele => {
            if (ele.length > 1 && ele[0] === '0') final = 'Neither';
            ele.split('').forEach(ele => { if (isNaN(ele)) final = 'Neither'})
            console.log(final)
        });
        if (final === 'Neither') return final;
        
        let res = arr.every(ele => (parseInt(ele) >= 0 && parseInt(ele) <= 255));

        return res ? 'IPv4' : 'Neither';
        
    } else if (myIp === '6'){
        
        let arr = IP.split(':')
        if (arr.length !== 8) return 'Neither';
        arr.forEach(ele => {
            if (ele.length > 4 || ele.length < 1) final = 'Neither';
            ele.split('').forEach(ele => {
                if (!ipAlpha.includes(ele.toLowerCase())) final = 'Neither';
            })            
        });
            if (final === 'Neither') return final;
            return 'IPv6'
        
    } else {
        return 'Neither'
    }
};


/// selfDividing nums

var selfDividingNumbers = function(left, right) {
    let final = [];
    
    let cur = left
    let flag = true
    while (cur <= right) {
        const num = cur.toString()
        if (num.length > 1) {
            num.split('').forEach(ele => {if (cur % parseInt(ele) !== 0) flag = false})
            flag ? final.push(cur) : flag = true
        } else {
            final.push(cur)
        }
        cur++
    }
    
    return final;
};


///pefrect num

var checkPerfectNumber = function(num) {
    if (num === 1) return false
    let final = []
    
    let half = num / 2
    let i = 1
    while (i <= half) {
        if (num % i === 0) final.push(i);
        i++;
    }
    
    return final.reduce((a,b) => a+b) === num
};


//count negative numbers in Matrix

var countNegatives = function(grid) {
    
    let count = 0;
    const len = grid.length
    const lenInner = grid[0].length
    for(let i = 0; i < len; i++){
        for(let j = 0; j < lenInner; j++){
            if (grid[i][j] < 0) {
                count += (lenInner - j) 
                break;
            }
            console.log(grid[i][j])
        }
    }
    
    return count;
};


///big country SQL

```
SELECT 
    name, population, area
FROM 
    World
WHERE 
    area > 3000000 OR population > 25000000 

```

///decrypt string 

var freqAlphabets = function(s) {
     let alpha = "abcdefghijklmnopqrstuvwxyz".split('')

     let str = ""
     for(let i = 0; i < s.length; i++){
        let idx;
        if (s[i + 2] === '#'){
            idx = parseInt(s.slice(i, i + 2))
            i += 2
        } else {
             idx = parseInt(s[i]);
        }
             str += alpha[idx - 1];
     }
         
    
    return str;
};



//max num product in th earr

var maxProduct = function(nums) {
    
    const arr = nums.sort((a,b) => a-b);
    return (arr[arr.length - 1] - 1) * (arr[arr.length - 2] - 1)
    
};

//find pivot index

var pivotIndex = function(nums) {
    //iterate thru arr
    // note: consider left && right edge == 0 
    //at each index check left sum === right sum of the index...
    // if yes -> return index 
    //if no -> continue seraching
    
    for(let i = 0; i < nums.length; i++){
        let sum1 = nums.slice(0, i).reduce((a,b) => a+b, 0); 
        let sum2 = nums.slice(i + 1).reduce((a,b) => a+b, 0);
        if (sum1 === sum2) return i;
    }
    
    return -1
    
    //return -1 if not found
};