function minMoves(n, startRow, startCol, endRow, endCol){
  //do bfs coz edges are not weighted;
  if (n === 0) return -1;

  const dirs = [
    [-2,1],
    [-1,2],
    [1,2],
    [2,1],
    [2,-1],
    [1,-2],
    [-1,-2],
    [-2,-1]
  ]

  let queue = [[startRow, startCol, 0]];
  let seen = {};

  while(queue.length){

    let cur = queue.shift();
    if(cur[0] === endRow && cur[1] === endCol){
      return cur[2];
    }

    for(let move of dirs){
      let nextMove = [cur[0]+move[0], cur[1]+move[1]]
      let x = nextMove[0]
      let y = nextMove[1]
      if(x >= 0 && x < n && y >= 0 && y < n && !seen[nextMove]) {
        seen[nextMove] = true;
        queue.push(nextMove.concat(cur[2]+1));
      }
    }
  }

  return -1;
}

// console.log(minMoves(10,0,0,0,2))
// console.log(minMoves(6,5,1,0,5))
// console.log(minMoves(9,4,4,4,8))
// console.log(minMoves(9,4,4,4,4))


//mid depth binary tree BFS
var minDepth = function(root) {
    if(root === null) return 0
    
    let queue = [[root, 1]];
    
    while(queue.length){
        let cur = queue.shift();
        let node = cur[0]
        let level = cur[1]
        if(!node.left && !node.right) return level;
        if(node.left) queue.push([node.left,level+1]);
        if(node.right) queue.push([node.right,level+1]);
    }
    
    return 0
};

///minimum Jumps BFS

var minimumJumps = function(forbidden, a, b, x) {
    if(x < 0) return -1;
    if(x === 0) return 0;
    

    
    let q = [[0,false,0]];
    let seen = forbidden.reduce((acc,val,i) => {
        acc[val] = true;
        return acc
    }, {});

    // console.log(seen)
    while(q.length){
        // console.log(q)
        const [location, backJump, jump] = q.shift();
        
        if(location === x) return jump;
        
        if(seen[location]) {
            continue;
        }
        
        seen[location] = true;
        
        let nextJump; 
        
        //check allowed backJump
        if(!backJump && location - b >= 0){
            nextJump = [location-b, true, jump+1];
            q.push(nextJump);
        }
        
        nextJump = [location+a, false, jump+1];
        if(nextJump[0] <= 2000+a+b) q.push(nextJump);
    }
    return -1;
};


///frog's min side jumps (dont work with mega array)

var minSideJumps = function(obstacles) {
    //my location
    //look forward to see obstacles
    //jump if other track if not blocked
    //track side jumps
    
    let q = [[0, 2, 0]]; 
    let res = [];
    
    while(q.length){
        let [position, track, sideJumps] = q.shift();
        

        while(position < obstacles.length){
            let nextMove = obstacles[position+1];
            if(nextMove === track){
                let blockedTrack = obstacles[position]
                let ways = [1,2,3].filter(e => e !== track && e !== blockedTrack) 
                ways.forEach(newTrack => {
                    q.push([position, newTrack, sideJumps+1])
                })
                break;
            }
            position++;
            if(position === obstacles.length){
                res.push(sideJumps)
            }
        }
    }

    return Math.min(...res)
};


//bucketfill

function strokesRequired(picture){
  let pic = picture.reduce((acc,val) => {
    acc.push(val.split(''))
    return acc
  },[])


  const dfs = (x, y, cur)=> {
    const up = x - 1;
    const down = x + 1;
    const left = y - 1;
    const right = y + 1;

    pic[x][y] = 'v';
    if(up >= 0 && pic[up][y] === cur) dfs(up, y, cur);
    if(down < pic.length && pic[down][y] === cur) dfs(down, y, cur);
    if(left >= 0 && pic[x][left] === cur) dfs(x, left, cur);
    if(right < pic[0].length && pic[x][right] === cur) dfs(x, right, cur)
  }

  let res = 0;
  for(let i = 0; i < pic.length; i++){
    for(let j = 0; j < pic[0].length; j++){
      if(pic[i][j] !== 'v'){
        res++;
        dfs(i, j, pic[i][j]);
      }    
    }
  }
  // console.log(pic)
  return res
}

// console.log(strokesRequired(['aaaba', 'ababa','aaaca']));
// console.log(strokesRequired([ "bbba", "abba", "acaa" , "aaac" ]));


var colorBorder = function(grid, r0, c0, color) {
   
    if(grid[r0][c0] === color) return grid
    
    const visited = new Array(grid.length).fill(0).map( row => {
        return new Array(grid[0].length).fill(false);
    })
    
    let start = grid[r0][c0];

    
    const dfs = (grid, visited, start, x, y, color) => {
        
        if(x < 0 || x === grid.length || y < 0 || y === grid[0].length){
                return -1;
        } 
        
        if (visited[x][y]) { return color; }
        if(grid[x][y] !== start) { return -1; }
        
        visited[x][y] = true;
        
//         const up = x-1
//         const down = x+1
//         const left = y-1
//         const right = y+1
        
//         if(up >= 0 && grid[up][y] === start) dfs(up,y,color)
//         if(down < grid.length && grid[down][y] === start) dfs(down,y,color)
//         if(left >= 0 && grid[x][left] === start) dfs(x,left,color)
//         if(up < grid[0].length && grid[x][right] === start) dfs(x,right,color)
        
        const v1 = dfs(grid, visited, grid[x][y], x+1, y, color);
        const v2 = dfs(grid, visited, grid[x][y], x-1, y, color);
        const v3 = dfs(grid, visited, grid[x][y], x, y+1, color);
        const v4 = dfs(grid, visited, grid[x][y], x, y-1, color);
        
        if( ![v1, v2, v3, v4].every( val => ( val === color || val === start))){
            grid[x][y] = color;
        }

        return grid[x][y];
    }
    
    dfs(grid, visited, start, r0, c0, color)
    
    return grid
};



///bracket combo

function BracketCombinations(num) { 

  // code goes here  
  let res = [];
  dfs(res, "", 0, 0, num);
  return res.length;
}

// const dfs = (res, str, open, close, max) => {
//   if(open === max && close === max){
//     res.push(str);
//     return;
//   }


//   if(open < max){
//     dfs(res, str+"(", open+1, close, max);
//   }

//   if(close < open){
//     dfs(res, str+")", open, close+1, max);
//   }
// }


/// Find First and Last Position of Element in Sorted Array

var searchRange = function(nums, target) {
    if(nums.length === 1 && nums[0] === target) return [0,0]
    
    let res = []; //[, 3]
    let i = 0;
    let j = nums.length-1;
    while(i < j){

        if(nums[i] === target && nums[j] === target){
            return [i, j];
        }
        
        if (nums[i] < target){
            i++;
        }
        
        if (nums[j] > target){
            j--;
        }
        
        if (nums[i] === target){
            if(!res[0]){
                res[0] = i
            }
        }
        
        if (nums[j] === target){
            if(!res[1]){
                res[1] = j
            }
        }
    }
    res = res[0] === 0 || res[0] ? [i, i] : res[1] === 1 || res[1] ? [j, j] : [-1, -1];

    return res;
};


/// combination sum

var combinationSum = function (candidates, target) {
  let res = [];

  for (let i = 0; i < candidates.length; i++) {
    let num = candidates[i];
    dfs(res, candidates, i, [num], num, target);
  }
  return res;
};

const dfs = (res, arr, i, temp, cur, t) => {
  if (cur > t) return;
  if (cur === t) {
    res.push(temp);
    return;
  }

  while (i < arr.length) {
    if (cur + arr[i] <= t) {
      dfs(res, arr, i, temp.concat([arr[i]]), cur + arr[i], t)
    }
    i++
  }
}


///permutations

// var permute = function (nums) {
//   let res = [];
//   let temp = [];
//   dfs(res, nums, temp);
//   return res;
// };

// const dfs = (res, nums, temp) => {
//   if (!nums.length) {
//     res.push(temp.slice());
//     return;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     temp.push(nums[i]);
//     nums.splice(i, 1); // remove
//     dfs(res, nums, temp);
//     nums.splice(i, 0, temp.pop()); // put back
//   }
// }



///check if sudoku board is valid

var isValidSudoku = function(board) {
    const row = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
    }
    const col = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
    }
    const box = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
    }

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
            let pos = board[i][j];            
            
            if(pos === ".") continue;
            
            if(row[i].includes(pos) || col[j].includes(pos)){
                return false;
            }
            
            row[i].push(pos);
            col[j].push(pos);
            
            let idx = Math.floor(i/3) * 3 + Math.floor(j/3);
            if (box[idx].includes(pos)) return false;
            box[idx].push(pos);
        }
    }
    return true;
};


///subsets

var subsets = function(nums) {
    let subs = [];
    let temp = []
    dfs(subs, nums, temp);

    return subs;
};

// const dfs = (subs, nums, cur) => {
//     subs.push(cur.slice());
//     if(!nums.length) return;
    
//     for(let i = 0; i < nums.length; i++){
//         cur.push(nums[i]);
//         dfs(subs, nums.slice(i+1), cur);
//         cur.pop()
//     }
// }


///set zeros in matrix
var setZeroes = function(matrix) {
  
    let seen = new Set();
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0 && !seen.has(`${i},${j}`)){
                setRow(i, j, seen, matrix);
                setCol(j, seen, matrix);
            }
        }
    }
};

const setRow = (i, j, seen, matrix) => {
    matrix[i].forEach((e,idx) => {
        if(matrix[i][idx] !== 0){
            matrix[i][idx] = 0;
            seen.add(`${i},${idx}`)
        }
    })    
}

const setCol = (j, seen, matrix) => {
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i][j] !== 0){
            matrix[i][j] = 0;
            seen.add(`${i},${j}`)
        }
    }
}


//hotel construction
//n = 7
//n-1 = 6 roads
//roads = [[1,2],[2,5],[3,4],[4,5],[5,6],[7,6]];
//return Number of ways to build 3 hotels under the conditions:
//1. so such the distance between every pair of hotels is equal!

//e.g [[1,2],[1,3],[1,4],[1,5]]
//                1
//             / / \ \
//           2  3  4  5
// there are 4 ways:
// 1. build in 2,3,4
// 2. build in 2,3,5
// 3. build in 2,4,5
// 4. build in 3,4,5

//return: 4 


const buildHotels = (roads) => {
  const distances = {};
  for(let i = 0; i <roads.length; i++){
    let road = roads[i];
    if(!distances[road[0]]){
      distances[road[0]] = {}
    }
    if(!distances[road[1]]){
      distances[road[1]] = {}
    }
    distances[road[1]][road[0]] = 1;
    distances[road[0]][road[1]] = 1;
  }
//   console.log(distances);

  //traverse ?
  let cur = [];
  let len = 0;
  for(let i = 2; i < roads.length+2; i++){
    let k = i+1;
    if(!distances[roads[i]][k]){
      for(const dist of distances[road[i]]){
        let keys = Object.keys(distances[road[i]]);
        let cnt = traverse(distances,keys,cur, k, 0);
        // console.log(cnt);
      }

    }
  }
}

const traverse = (obj, keys, cur, tk, count) => {
  if(obj[cur][tk]){
    return ++count;
  }
  for(let i =0; i < keys.length; i++){
    traverse(obj, keys.slice(1), cur, tk, count)
  }
}
// console.log(buildHotels([[1,2],[1,3],[1,4],[1,5]])); // => 4


/// merge intervals

var merge = function(intervals) {
    
    // sort by the start of the interval in asc;
    intervals = intervals.sort((a,b) => a[0]-b[0]);
    
    let res = [];
    
    // here we track the range of current interval; 
    let min = null;
    let max = null;
    
    // store current interval;
    let cur = []
    for(let i = 0; i < intervals.length; i++){
        
        // basically reassign min and max when i === 0; 
        if (min === null && max === null){
            min = intervals[i][0];
            max = intervals[i][1];
            cur = [min, max];
            
        // here we know that we have min and max, now we look if it falls into the range;             
        } else {
            
            // if is in range, reassign max if necessary;
            if(intervals[i][0] >= min && intervals[i][0] <= max){
                max = intervals[i][1] > max ? intervals[i][1] : max;
                cur[1] = max;
                
            // else if it is not in range, we know its the begining of new interval;
            // we push current interval into the result and do proper reassignment;
            } else {
                res.push(cur);
                min = intervals[i][0];
                max = intervals[i][1];
                cur = [min, max];
            }
        }
        
        // sometime we modify cur and dont push it in the code above,
        // so we have to check if we are looking at the last element of intervals; 
        if(i === intervals.length-1){
            res.push(cur);
        }
    }
    
    
    return res;
};

///dynamic programming Min path
var minPathSum = function(grid) {
     let m = grid.length
    let n = grid[0].length
    let dp = Array.from({length: m}, el => Array.from({length:n}, el => 0))
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
		    //get the min path sum to the current cell using our previously calculated values from the dp matrix -
			//It will be the minimum of the cell above or to the left of current cell
			//Also account for index out-of-bounds errors for first cell and first row and col
            let minPrev = !j && !i ? 0 : Math.min((j ? dp[i][j - 1] : Number.MAX_SAFE_INTEGER), (i ? dp[i - 1][j] : Number.MAX_SAFE_INTEGER))
            dp[i][j] = minPrev + grid[i][j] //add the previous min path sum to the current cell to get the new min path sum to this cell
        }
    }
    return dp[m - 1][n - 1]
}


///product defects 

const defects = (matrix) => {
  let track = new Array(matrix.length).fill(0).map(e => new Array(matrix[0].length).fill(0));

  let maxArea = 0;
  
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){

      if(i === 0 || j === 0){
        track[i][j] = matrix[i][j];
      } else {
        let min = Math.min(track[i-1][j], track[i-1][j-1], track[i][j-1]);
        track[i][j] = min + matrix[i][j];
      }

      if (track[i][j] > maxArea){
        maxArea = track[i][j];
      }
    }
  }
//   console.log(track)
  return maxArea;


}



// console.log(defects([[1,1,1],[1,1,0]]));
// console.log(defects([[1,1,1,1,1],[1,1,1,0,0],[1,1,1,0,0],[1,1,1,0,0],[1,1,1,1,1]]));



///sort Colors

var sortColors = function(nums) {
    
    for (let i = 0; i < nums.length; i++){
        let j = nums.length-1;
        while (j > i){
            if (nums[i] > nums[j]){
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
            j--;
        }
    }
};



// get permutation

var getPermutation = function(n, k) {
    // assign res
    // return string
    // do backtracking recursion
    // i = 1, i === k when push last one and return
    
    //create str 
    let i = 1;
    let str = ""
    while(i <= n){
        str += `${i}`;
        i++;
    }
    
    if (k === 1) return  str;
    
    let nums = str.split("");
    let res = [];
    
    build(nums, res, "", k);
    
    return res.pop();
};

const build = (nums, result, word, k) => {
    if (result.length === k) return;
    if (!nums.length){
        result.push(word);
        return;
    }
    
    for (let i = 0; i < nums.length; i++){
        let ele = nums[i];
        
        //remove ele at i;
        nums.splice(i, 1);

        build(nums, result, word += ele, k);
        
        //backrack;
        //insert ele at i 
        nums.splice(i, 0, ele);
        word = word.slice(0, word.length-1)
    }
}

/// num of islands

var numIslands = function(grid) {
    let res = 0;
    
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            if (grid[i][j] === '1'){
                res++;
                traverse(grid, i, j);
            }
        }
    }
    
    return res
};

// const traverse = (grid, x, y) => {
//     if (grid[x][y] === '1') {
//         grid[x][y] = '.'
        
//         let dirs = [[-1,0],[1,0],[0,-1],[0,1]];
        
//         for (const dir of dirs){
//             if (grid[x+dir[0]]) traverse(grid, x + dir[0], y + dir[1]);
//         }
        
//     } else {
//         return;
//     }
// }



/// max area island

var maxAreaOfIsland = function(grid) {
    let res = 0;
    let temp = [];
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            if (grid[i][j] === 1){
                traverse(grid, i, j, temp);

                if (temp.length > res) {
                    res = temp.length;
                }
                temp = [];
            }
        }
    }
    return res;
};


// const traverse = (grid, x, y, cur) => {
    
//     if (grid[x][y] === 1){
//         grid[x][y] = '.';
//         cur.push(1);
        
//         const dirs = [[-1,0],[1,0],[0,1],[0,-1]];
//         for (const dir of dirs){
//             if (grid[x + dir[0]]){
//                 traverse(grid, x + dir[0], y + dir[1], cur);
//             }
//         }
        
//     } else {
//         return;
//     }
// }


/// hackerrank
const maxSubArrayValue = (arr, memo={}) => {
    maxHelper(arr, memo);
    
    let max = 0;
    for(let key in memo){
        let cur = Math.abs(memo[key]);
        if (cur > max) max = cur;
    }

    return max ** 2;
}

const maxHelper = (arr, memo={}) => {
    if (!arr.length) return 0;

    if (!memo[arr]) {
        memo[arr] = arr[0] - maxHelper(arr.slice(1), memo);
    }

    return memo[arr]
}

// console.log(maxSubArrayValue([2,-1,-4,5])); // 81
// console.log(maxSubArrayValue([-1,-4,2])); // 36
// console.log(maxSubArrayValue([-1])); // 1
// console.log(maxSubArrayValue([])); // 0


// idea is only start iterating from the bottom of the sequence => O(n)
var longestConsecutive = function(nums) {
    let max = 0;
    let map = {}
    for(let num of nums) {
        map[num] = true;
    }

    for(let num of nums) {
        let longest = 1;
        let cur = num;
        
        if (!map[num - 1]) {
            while(map[cur + 1]) {
                longest++;
                cur = cur+1;
            }
        }
        
        max = Math.max(max, longest) 
    }

    return max;
};



// console.log(longestConsecutive([10,5,12,3,55,30,4,11,2])); // 4
// console.log(longestConsecutive([19,13,15,12,18,14,17,11])); // 5 coz 11-12-13-14-15
// console.log(longestConsecutive([0,-1])); // 2 


var removeOuterParentheses = function(s) {
    let count = 0, outer = ""

    for(let i = 0 ; i < s.length; i++) {
        if(s[i] === "(") {
            count++
        }
        if(count > 1) {
            outer += s[i]
        }
        if(s[i] === ")") {
            count--
        }
    }
    return outer
};

// console.log(removeOuterParentheses("(()())(())")); // ()()()

/*
    res = "()()()"
    count = 0

              i 
    "(()())(())"
*/


///drone planner

function calcDroneMinEnergy(route) {
  // your code goes here
  let res = 0;
  let curEnergy = 0; // 1
  let curHeight = 0; // 6
  
  let points = route.map(arr => arr[2]) // => [10,0,6,15,8]
  
  for(let i = 0; i < points.length; i++) {
    if (i === 0) {
      curHeight = points[i]
    } else {
      let nextHeight = points[i]  // 6
      let cost = curHeight - nextHeight; // 3
      let remainingEnergy = curEnergy + cost;
      
      if (remainingEnergy >= 0) {
        curEnergy = remainingEnergy;
        curHeight = nextHeight
      } else {
        return Math.abs(remainingEnergy)
      }
    }
  }
  
  return res;
}

/*
        z
        |
        |
        | 
          ------- y
       /
      /  
     x  
*/

/// shifted binary search

const findPivotPoint_2 = (arr) => {
    let l = 0
    let r = arr.length - 1

    while (l <= r){
        let mid = Math.floor((r + l)/2) //3

        if (mid === 0 || arr[mid] < arr[mid-1]) {
            return mid
        } else  if (arr[mid] > arr[0]){
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return 0
}
/*
mid                 m
l                   i
        [9, 12, 17, 2, 4, 5]
r                   j     

mid = i + (j - i)/2  = 2
*/

// console.log(findPivotPoint_2([9, 12, 17, 2, 4, 5]))
// console.log(findPivotPoint_2([3,1]))


//shifted arr;

function shiftedArrSearch(shiftArr, num) {
  let pivotIdx = findPivotPoint(shiftArr); 
 
  if (pivotIdx === 0 || num < shiftArr[0]) {
    return bs(shiftArr.slice(pivotIdx, shiftArr.length), num) + pivotIdx
  }
  
  return bs(shiftArr.slice(0, pivotIdx), num)
}

//[3,1] => 0

// m
//[1,3] => -1
const findPivotPoint = (arr) => {
    let l = 0
    let r = arr.length - 1

    while (l <= r){
        let mid = Math.floor((r + l)/2)         // 0

        if (mid < r && arr[mid] > arr[mid+1]) { // 0 < 1 
            return mid
        } else if (mid > l && arr[mid] < arr[mid+1]){   // 0 > 0
            return (mid - 1);
        } else if (arr[l] >= arr[mid] ){  
            r = mid - 1                                  // 0 < 1 
        } else {
            l = mid + 1
        }
    }
    return -1
}


function bs(arr, t) { 
  if (!arr.length) return -1;
  
  let midIdx = Math.floor(arr.length/2);
  
  if (arr[midIdx] === t) return midIdx;
  
  if (t < arr[midIdx]) {
    return bs(arr.slice(0, midIdx), t)
  } else {
    let res = bs(arr.slice(midIdx+1), t); 
    return res === -1 ? -1 : midIdx + res + 1 
  }
  
}

// console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 2)) // 3
// console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 4)) // 4
// console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 17)) // 2
// console.log(shiftedArrSearch([1,2,3,4,5,0], 0)) // 5


function findPivot( arr, low, high){
    // base cases
    if (high < low)
        return -1;
    if (high == low)
        return low;
 
    let mid = Math.floor((low + high) / 2); /*low + (high - low)/2;*/
    if (mid < high && arr[mid] > arr[mid + 1])
        return mid;
 
    if (mid > low && arr[mid] < arr[mid - 1])
        return (mid - 1);
 
    if (arr[low] >= arr[mid])
        return findPivot(arr, low, mid - 1);
 
    return findPivot(arr, mid + 1, high);
}

// console.log(findPivot([1,3], 0, 1))
// console.log(findPivot([3,1], 0, 1))
// console.log(findPivotPoint([1,3], 0, 1))
// console.log(findPivotPoint([3,1], 0, 1))


/* 
  S-1-2    2: [[0,4], [2,4]]
  --WWW
  WWW-2
  ---E-
  1----
  
S----
-----
-----
-----
----E


  dfs(
    dfs-right
    dfs-down
    dfs-left
    dfs-up
  )
  
  



mentioning edge cases earlier would be a good idea (i.e. what happens if you cant reach the end?)
mentioning are diagonals are okay would be good too

bfs vs dfs and when to use it

a lil fuziness with time complexity but you got it eventually

mentioning edge cases is great, gj! only missed if it's impossible to reach the end

naming your functions to be more explicit might be a nice touch, (a bfs should be named BFS in terms of best practices since other engineers will immediately recognize it if named well)


can you inline currX, currY, curNumofSteps

queue vs q, cur vs current

defining the funciton so it can support any S by default, didn't ask if diagonals count


as a nit, the string conversion for handling the set is probs not ideal. making a copy of the array would be better

x and y vs. startX and startY

defining constants in the function vs. outside of the function

clear language mastery which is great

in-line if statements aren't recommended and most linters catch it, prefer if () {

}

forgot to add the initial S into your visited set

coding pace is a lil slow, didn't get to the teleporters in time

pulling out constants is a best-practice as wel

pulling out stuff into functions allows you to name what you're checking (instead of nextX >= 0... you could have a function called inBounds)

didn't ask if taking a teleporter counts as a step




  res = 8
*/

const ENDING_VALUE = 'E'
const VALID_DIRECTIONS = [[0,-1],[0,1], [1,0],[-1,0]];

function bfsMatrixTraversal(matrix, x, y, teleporterMap) {
    const q = [[x,y,0]];
  
    while(q.length) {
        let shift = q.shift(); 
        let curX = shift[0]
        let curY = shift[1]
        let curNumOfStep = shift[2]
        
        matrix[curX][curY] = "V"

        if (matrix[curX][curY] === ENDING_VALUE) {
            return curNumOfStep;  
        }
    
        for(let dir of VALID_DIRECTIONS) {
            let nextX = curX + dir[0]
            let nextY = curY + dir[1]
        
            if (isInBounds(nextX, nextY, matrix) && !matrix[nextX][nextY] === "W" && !matrix[nextX][nextY] === "V") {
                q.push([nextX, nextY, curNumOfStep+1])
            }  
        }
    }

  return -1;
}

function isInBounds(x, y, matrix) {
  return x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length 
}




//binary search in shifted arr 2 with dups

// class Solution {
//     public boolean search(int[] nums, int target) {
//         int n = nums.length;
//         if (n == 0) return false;
//         int end = n - 1;
//         int start = 0;

//         while (start <= end) {
//             int mid = start + (end - start) / 2;

//             if (nums[mid] == target) {
//                 return true;
//             }

//             if (!isBinarySearchHelpful(nums, start, nums[mid])) {
//                 start++;
//                 continue;
//             }
//             // which array does pivot belong to.
//             boolean pivotArray = existsInFirst(nums, start, nums[mid]);

//             // which array does target belong to.
//             boolean targetArray = existsInFirst(nums, start, target);
//             if (pivotArray ^ targetArray) { // If pivot and target exist in different sorted arrays, recall that xor is true when both operands are distinct
//                 if (pivotArray) {
//                     start = mid + 1; // pivot in the first, target in the second
//                 } else {
//                     end = mid - 1; // target in the first, pivot in the second
//                 }
//             } else { // If pivot and target exist in same sorted array
//                 if (nums[mid] < target) {
//                     start = mid + 1;
//                 } else {
//                     end = mid - 1;
//                 }
//             }
//         }
//         return false;
//     }

//     // returns true if we can reduce the search space in current binary search space
//     private boolean isBinarySearchHelpful(int[] arr, int start, int element) {
//         return arr[start] != element;
//     }

//     // returns true if element exists in first array, false if it exists in second
//     private boolean existsInFirst(int[] arr, int start, int element) {
//         return arr[start] <= element;
//     }
// }




///binarySearch in shifted arr

var search = function(nums, target) {
    const pivot = findPivot(nums);

    if (pivot === -1) {
    return binarySearch(nums, target) 
    }

    if (target >= nums[0]) {
    return binarySearch(nums.slice(0, pivot+1), target);
    }

    let res = binarySearch(nums.slice(pivot+1), target);

    return res === -1 ? false : true;
}


function findPivot(arr) {
    let l = 0;
    let r = arr.length - 1;

    while(l<=r) {
        let mid = Math.floor((l+r)/2);

        if(arr[mid] > arr[mid+1]) {
          return mid
        } else if (arr[mid] < arr[mid-1]) {
          return mid-1;
        } else if (arr[mid] > arr[0]) {
          l = mid+1
        } else {
          r = mid - 1
        }
    }
  
   return -1;
}

function binarySearch(arr, target) {
  if (!arr.length) {
    return false
  }
  
  const mid = Math.floor(arr.length/2);
  if (arr[mid] === target) {
    return true;
  } else if (target < arr[mid]) {
    return binarySearch(arr.slice(0, mid), target)
  } else {
    let res = binarySearch(arr.slice(mid+1), target)
    return res === false ? false : true;
  } 
}


function isToeplitz(arr) {
  let firstRow = arr[0];

  for(let i = 0; i < firstRow.length; i++) {
      let curNum = firstRow[i]; 
      let row = 0
      let col = i 
      
      while(arr[row] && arr[row][col] !== undefined ) {  
          if (arr[row][col] !== curNum) return false;
          row++;  
          col++;  
      }
  }
  
  for(let i = 1; i < arr.length; i++) {
      let curNum = arr[i][0]
      let row = i
      let col = 0
      
      while(arr[row] && arr[row][col] !== undefined ) {         
          if (arr[row][col] !== curNum) return false;
          row++;  
          col++;  
      }
  }
  
  return true;
}


///dynamic programming DP

var longestPalindromeSubseq = function(s) {
    
    let table = Array(s.length).fill(0).map(e => Array(s.length).fill(0))
    let l = 1;
    
    for(let i = 0; i < s.length; i++) {
        table[i][i] = 1;
    }

    for(let l = 2; l<= s.length;l++) {
        for(let i = 0; i< s.length - l + 1;i++){
            let j = i+l-1
            if (l === 2 && s[i] === s[j]) {
                table[i][j] = 2;
            } else if (s[i] === s[j]) {
                table[i][j] = 2 + table[i+1][j-1];    
            } else {
                table[i][j] = Math.max(table[i+1][j], table[i][j-1]);    
            }
        }
    }
    console.log(table)
    return table[0][s.length-1]
};


//valid sudoku

var isValidSudoku = function(board) {
    let row = {}
    let col = {}
    let box = {}
    for(let i = 0; i < board.length; i++) {
        row[i] = []
        col[i] = []
        box[i] = []
    }
    
    for(let i = 0; i < board.length;i++){
        for(let j = 0; j<board[i].length;j++) {
            let num = board[i][j];
            
            if (num === ".") {
                continue;
            }
            
            let boxIdx = Math.floor(i/3) * 3 + Math.floor(j/3);
            if (row[i].includes(num) || col[j].includes(num) || box[boxIdx].includes(num)) {
                return false;
            }
            
            row[i].push(num)
            col[j].push(num)
            box[boxIdx].push(num)
        }
    }
    
    return true;
}