//1.
function totalChatNumber(arr){
  if (!arr.length) return 0;
  return arr[0].length + totalChatNumber(arr.slice(1)); 
}

// console.log(totalChatNumber(["abc", "def", "ghi", "j"]));
// console.log(totalChatNumber(["abc", "def", "ghi", ""]));
// console.log(totalChatNumber(["abc", "def", "ghi", "j", "k", "sadawd", "asdasd"]));
// console.log(totalChatNumber([""]));


//2.
function evenNums(arr) {
  if (!arr.length) return [];
  if (arr[0] % 2 === 0) return [arr[0]].concat(evenNums(arr.slice(1)));
  return evenNums(arr.slice(1));
}

// console.log(evenNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//3.
function seq(n) {
  if (n === 1) return 1;
  return n + seq(n - 1);
}

// console.log(seq(7));
// console.log(seq(5));

//4.
function findIndex(str, i = 0) {
  if (str[0] === "x") return i;
  return findIndex(str.slice(1), i + 1);
}

// console.log(findIndex("abcdefglkjgiuhgoixasdaw")); //=> 17

//5.
function shortestPath(n,m) {
  if (n === 1 || m === 1) return 1 ;
  return shortestPath(n - 1, m) + shortestPath(n, m - 1);
}

// console.log(shortestPath(3,7));