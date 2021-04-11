

function findPath(grid) {
  return findPathHelper(grid, 0, 0)
}

function findPathHelper(grid, r, c) {
  
  if (r >= grid.length || c >= grid[0].length) return false 
  if (grid[r][c] !== 0) return false;

  if (r === grid.length - 1 && c === grid[0].length - 1) {
    return true
  }


  if (findPathHelper(grid, r, c + 1)){
    return true
  }

  if (findPathHelper(grid, r + 1, c)){
    return true 
  }

  return false 
}


console.log(findPath([
                      [0,1,1],
                      [0,0,1],
                      [1,0,0]
                    ])
          )