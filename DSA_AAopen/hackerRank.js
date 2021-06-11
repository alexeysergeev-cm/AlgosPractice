// function deleteProducts(ids, m){
//   let obj = {}

//   for(let i = 0; i < ids.length; i++){
//     let id = ids[i]
//     obj[id] ? obj[id]++ : obj[id] = 1
//   }
//   console.log(obj)

//   let countArr = Object.values(obj);
//   countArr = countArr.sort((a,b) => a-b);
//   console.log(countArr)


//   for(let i = 0; i < m; i++){
//     if(countArr.length === 0) return 0;
//     countArr[0] -= 1


//     if (countArr[0] <= 0) countArr =countArr.slice(1)
//   }
//   return countArr.length



// }

function deleteProducts(ids, m){
  freq = {}
  for(let i = 0; i < ids.length; i++){
    freq[ids[i]] ? freq[ids[i]]++ : freq[ids[i]] = 1
  }
  let arr = Object.values(freq);
  
  let count = m 
  arr = arr.sort((a,b)=>a-b)
  for(let i =0; i <arr.length;i++){
    
    if(count < arr[i]) break;
    count -= arr[i]
    arr[i] = 0
  }
  // console.log(arr)
  return arr.filter(e=> e > 0).length
}

let arr = [1,2,3,1,2,2,1]
// let m = 2;
// console.log(deleteProducts(arr,3))
// console.log(deleteProducts([2,3,2,2],3))
// console.log(deleteProducts([1,1,5,5],2))
// console.log(deleteProducts([1,2,1,2,2,1],1))

function anagram(s) {
    // Write your code here
    if (s.length % 2) return -1
    let mid = Math.floor(s.length/2)
    let left = s.slice(0, mid).split('').sort()
    let right = s.slice(mid).split('').sort()
    console.log(left,right)
    let count = 0;
    left.forEach((e,i) => {if(e !== right[i]) count++})
    
    return count;
}

console.log(anagram('immceukpupwhgaosececxmueynudagpiudmyaxpuondunrortutthpzhftkfzbpvhdthckdqxgmkzbbvvxoeopmvjyakcrgjvzqxmvqjbcuafxvdwljnbvimwlwyccjzezzqwpzxtvzzvxetkninlrzhcwhgyqgerfunwwmptlqqkukxiukvlkcpilyibgnsnjhjhtabgrttnfqxaaslmwduhddijqcwblhjejmnafgqlwnlwiyjebfogiypadncowntgzgiemypkocgybrcexslhraiuqmimzdsyldezbwjryspzlueimrqdrazjmkwnpqlbtrcxnoomgenryrckiuqcurlidjvtaiwvzasnohbunoolgqxqmpuijiqmrnhtvdrugjjuskpfzfshxszjhurqcjfvwmprsinyrxsmhjtgomplgpwnjng'))

function makingAnagrams(s1, s2) {
    // Write your code here
    let obj = {}
    for(let char of s1){
        obj[char] ? obj[char]++ : obj[char] = 1; 
    }
    
    let notDelete = 0;
    for(let char of s2){
        if (obj[char]) {
            obj[char]--
            notDelete++;
        }
    }
    
    return s1.length-notDelete + s2.length-notDelete;
}


function gameOfThrones(s) {
    // Write your code here
    let obj = {};
    for(let char of s){
        obj[char] ? obj[char]++ : obj[char] = 1; 
    }
    
    let v = Object.values(obj).filter(e => e%2);
    if(s.length % 2){
        if (v.length === 1) return 'YES'
    } else {
        if (!v.length) return 'YES'
    }
    return 'NO'
}


function minimumSwaps(arr) {
    let swaps = 0;
    const l = arr.length;

    let arr2 = arr.slice().sort((a, b) => a - b);
    let map = arr.reduce((acc, val, i) => {
        acc[val] = i
        return acc
    }, {});

    for (let i = 0; i < l; i++) {
        let v1 = arr[i]
        let v2 = arr2[i]
        if (v1 !== v2) {
            swaps++
            const idx = map[v2]
            arr[idx] = v1;
            arr[i] = v2;
            map[v1] = idx;
        }
    }
    return swaps
}
