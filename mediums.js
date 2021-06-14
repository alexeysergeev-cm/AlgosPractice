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

console.log(minMoves(10,0,0,0,2))
console.log(minMoves(6,5,1,0,5))
console.log(minMoves(9,4,4,4,8))
console.log(minMoves(9,4,4,4,4))


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