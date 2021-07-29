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

const dfs = (res, str, open, close, max) => {
  if(open === max && close === max){
    res.push(str);
    return;
  }


  if(open < max){
    dfs(res, str+"(", open+1, close, max);
  }

  if(close < open){
    dfs(res, str+")", open, close+1, max);
  }
}