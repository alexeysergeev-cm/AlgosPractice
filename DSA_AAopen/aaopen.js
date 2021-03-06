let arr1 = [1, 5, 10, 15];
let arr2 = [0, 2, 3, 7, 10];
console.log(merge(arr1, arr2)); // => [0, 1, 2, 3, 5, 7, 10, 10, 15]


function merge(array1, array2) {
    let merged = [];

    while (array1.length || array2.length) {
        let ele1 = array1.length ? array1[0] : Infinity;
        let ele2 = array2.length ? array2[0] : Infinity;

        let next;
        if (ele1 < ele2) {
            next = array1.shift();
        } else {
            next = array2.shift();
        }

        merged.push(next);
    }

    return merged;
}


function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx);

    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);
    
    return merge(sortedLeft, sortedRight);
}

console.log(quickSort([1,2,4,6,1,2,6,32,8,65,57,99,97,6]))
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array.shift();
    let left = array.filter(el => el < pivot);
    let right = array.filter(el => el >= pivot);

    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);

    return [...leftSorted, pivot, ...rightSorted];
}


//radix sort for positive integers
console.log(radixSort([1,213,51,6135,77235,734,75634,23345,90,43,2,341, 5]))


function getMaxDigits(nums) {

  const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr) {

  const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

  if (!Array.isArray(arr)) {
    return null;
  }

  let maxDigits = getMaxDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({length: 10}, () => []); // Array of empty arrays

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigitFrom(arr[i], k);
      buckets[digit].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }
  return arr;
}



////countingSort
console.log(countingSort([2,3,4,5,1], 5))
function countingSort(arr, max) {
  const result = [];
  const counters = new Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    counters[arr[i]]++;
  }

  for (let i = 0; i < counters.length; i++) {
    while (counters[i] > 0) {
      result.push(i);
      counters[i]--;
    }
  }

  return result;
}


///binarySearch 
function binarySearch(array, target) {
    if (array.length === 0) {
        return false;
    }

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx + 1);

    if (target < array[midIdx]) {
        return binarySearch(leftHalf, target);
    } else if (target > array[midIdx]) {
        return binarySearch(rightHalf, target);
    } else {
        return true;
    }
}



// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);

        if (!this.head){
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) return undefined;
        let curr = this.head;
        let newTail = curr;
        while(curr.next) {
            newTail = curr;
            curr = curr.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return curr;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
       let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) return undefined;
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    // TODO: Implement the contains method here
    contains(target) {

        let node = this.head;
        while (node) {
            if (node.value === target) return true;
            node = node.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // TODO: Implement the set method here
    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = val;
            return true;
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length) return !!this.addToTail(val);
        if (index === 0) return !!this.addToHead(val);

        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();
        const previousNode = this.get(index - 1);
        const removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}



// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val){
    this.value = val
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val){
    const newNode = new Node(val);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    return ++this.length;

  }

  pop(){
    if (!this.top) return null;
    const removed = this.top;

    if (this.length === 1) {
      this.bottom = null
    }
    this.top = this.top.next;
    this.length--;

    return removed.value;
  }

  size(){
    return this.length;
  }
}


// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val){
    this.value = val
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(val){
    const newNode = new Node(val)

    if(!this.front){
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }

    return ++this.length
  }

  dequeue(){
    if (!this.front) return null;
    const removed = this.front;

    if (this.front === this.back){
      this.back = null;
    }

    this.front = this.front.next;
    this.length--
    return removed.value
  }

  size(){
    return this.length;
  }
}


var reverseList = function(head) {
  if (!head) return head;
  
  let prev = head.next;
  head.next = null;
  return func(head, prev);
  
  function func(cur, prev) {
    if (prev === null) {
        return cur;
    }
    let tmp = prev.next;
    prev.next = cur;
    return func(prev, tmp)
  }
};


//Graphs and Trees

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;



//balanced parens

function balancedParens(str) {
  if (!str.length) return true
  let table = {
    '(': 1,
    ')': 1,
    '{': 1,
    '}': 1,
    '[': 1,
    ']': 1
  }

  const stack = [] //[(, (, ]
  for(let i = 0; i < str.length; i++){
    if (table[str[i]]) {
      if (str[i] === ')') {
        if (stack[stack.length -1] !== '(') {
          return false
        } else {
          stack.pop();
        }
      } else if (str[i] === '}') {
        if (stack[stack.length -1] !== '{') {
          return false
        } else {
          stack.pop();
        }
      } else if (str[i] === ']') {
        if (stack[stack.length -1] !== '[') {
          return false
        } else {
          stack.pop();
        }
      } else {
        stack.push(str[i]);
      }
    }
  }

  return stack.length === 0;
}


// [10, 12, 8, 2, 20] => min = 2; max = 20

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// Refactor the regular Stack below into a MinMaxStack!
class MinMaxStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        return ++this.length;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        const temp = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return temp;
    }

    min(){
        if (!this.top) return null;
        if (this.top === this.bottom) {
            return this.top
        }

        let min = this.top
        let curr = this.top;
        while(curr){
            if (curr.value < min.value) min = curr;
            curr = curr.next;
        }
        return min
    }

    max(){
        if (!this.top) return null;
        if (this.top === this.bottom) {
            return this.top
        }
        let max = this.top
        let curr = this.top
        while (curr) {
            if (curr.value > max.value) max = curr;
            curr = curr.next
        }
        return max
    }

    size() {
        return this.length;
    }
}

//reverse linkedlist
function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here

    let res = [];
    let head = linkedList.head;

    while(head){
        if (head.value === undefined) {
            res.unshift('undefined');
        } else if (head.value === null) {
            res.unshift('null')
        } else {
            res.unshift(head.value);
        }
        head = head.next;
    }

    return res.join(' -> ')
}



//depth

function depthFirstSearch(root, targetVal) {
    if (!root) return null;
    let stack = [root]
    while(stack.length){
        let ele = stack.pop()
        if (ele.val === targetVal) return ele

        if (ele.right) stack.push(ele.right)
        if (ele.left) stack.push(ele.left)
    }
    return null
}


//breadth
function breadthFirstArray(root) {
    if (!root) return null;

    let queue = [root]
    let res = []
    while (queue.length){
        let ele = queue.shift();
        res.push(ele.val)
        if (ele.left) queue.push(ele.left)
        if (ele.right) queue.push(ele.right)
        
    }
    return res
}


///tree height

function treeHeight(root) {
    if (!root) return -1
    // let res = 0;
    // let stack = [root];
    // while(stack.length){
    //     let node = stack.pop();
    //     if (node.left || node.right) res++;
    //     if (node.right) stack.push(node.right);
    //     if (node.left) stack.push(node.left)
    // }

    // return res

    //recurrsion
    return 1 + (Math.max(treeHeight(root.left), treeHeight(root.right)))
}


//tree_sum
function treeSum(root) {
    if (!root) return 0;
    let sum = 0;
    let queue = [root];
    while(queue.length){
        let node = queue.shift();
        sum += node.val
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return sum

    // recurrsion
    // return treeSum(root.left) + root.val + treeSum(root.right)
}

///BST

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor(){
        this.root = null;
    }

    insert(val, root = this.root){
        const node = new TreeNode(val)
        if (!this.root){
            this.root = node
            return 
        }

        if (val < root.val){
            if (!root.left) {
                root.left = node;
            } else {
                this.insert(val, root.left)
            }
        } else {
            if (!root.right) {
                root.right = node;
            } else {
                this.insert(val, root.right)
            }
        }
    }

    searchRecur(val, root = this.root){
        if (!root) return false;

        if (val < root.val){
            return this.searchRecur(val, root.left)
        } else if (val > root.val) {
            return this.searchRecur(val, root.right)
        } else {
            return true
        }
    }
    
    searchIter(val, root = this.root){
        if (!root) return false;

        let stack = [root];
        while(stack.length) {
            let node = stack.pop();
            if (node.val === val) return true;
            if (node.right) stack.push(node.right)
            if (node.left) stack.push(node.left)
        }

        return false;
    }
}





//graphs

function dijkstras(graph, source) {
    let distance = {};
    for (let node in graph) {
        distance[node] = Infinity;
    }
    distance[source] = 0;

    let unvisited = new Set(Object.keys(graph));
    let previous = {};

    while (unvisited.size > 0) {
        let currNode = minDistanceNode(unvisited, distance);
        unvisited.delete(currNode);

        for (let neighbor in graph[currNode]) {
            let distanceFromCurrToNeighbor = graph[currNode][neighbor];
            let totalNeighborDistance = distance[currNode] + distanceFromCurrToNeighbor;

            if (distance[neighbor] > totalNeighborDistance) {
                distance[neighbor] = totalNeighborDistance;
                previous[neighbor] = currNode;
            }
        }
    }

    return { distance, previous };
}

function minDistanceNode(nodes, distance) {
    return Array.from(nodes).reduce((minNode, node) => (
        distance[node] < distance[minNode] ? node : minNode
    ));
 }

let graph = {
    'a': { 'c': 1, 'b': 7 },
    'b': { 'a': 7, 'd': 12, 'e': 13 },
    'c': { 'a': 1, 'd': 20, 'f': 4 },
    'd': { 'b': 12, 'c': 20, 'e': 5 },
    'e': { 'b': 13, 'd': 5, 'f': 9 },
    'f': { 'c': 4, 'e': 9 }
};

let { distance, previous } = dijkstras(graph, 'a');

console.log(distance);
console.log(previous);


///HEAP
class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }
    
    siftUp(idx) {
        if (idx === 1) return;
        
        let parentIdx = this.getParent(idx);

        if (this.array[parentIdx] < this.array[idx]) {
            [ this.array[parentIdx], this.array[idx] ] = [ this.array[idx], this.array[parentIdx] ];
            this.siftUp(parentIdx);
        }
    }

    deleteMax() {
        if (this.array.length === 2) return this.array.pop();
        if (this.array.length === 1) return null;

        let max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }

    siftDown(idx) {
        let ary = this.array;
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx); 
        let leftVal = ary[leftIdx];
        let rightVal = ary[rightIdx];

        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;
    
        if (ary[idx] > leftVal && ary[idx] > rightVal) return;
    
        if (leftVal < rightVal) {
          var swapIdx = rightIdx;
        } else {
          var swapIdx = leftIdx;
        }
    
        [ ary[idx], ary[swapIdx] ] = [ ary[swapIdx], ary[idx] ];
        this.siftDown(swapIdx);
    }
}


//in-place heap sort

function heapSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        heapify(array, array.length, i);
    }

    for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
        swap(array, endOfHeap, 0);
        heapify(array, endOfHeap, 0);
    }
    
    return array;
}

function heapify(array, n, i) {
    let leftIdx = 2 * i + 1;
    let rightIdx = 2 * i + 2;

    let leftVal = array[leftIdx];
    let rightVal = array[rightIdx];

    if (leftIdx >= n) leftVal = -Infinity;
    if (rightIdx >= n) rightVal = -Infinity;

    if (array[i] > leftVal && array[i] > rightVal) return;

    let swapIdx;
    if (leftVal < rightVal) {
        swapIdx = rightIdx;
    } else {
        swapIdx = leftIdx;
    }
    swap(array, i, swapIdx);
    heapify(array, n, swapIdx);
}

function swap(array, i, j) {
    [ array[i], array[j] ] = [ array[j], array[i] ];
}


//Trie

class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word, root=this.root) {
        let letter = word[0];
        if (!(letter in root.children)) {
            root.children[letter] = new Node();
        }

        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {
            this.insert(word.slice(1), root.children[letter]);
        }
    }

    search(word, root=this.root) {
        if (word.length === 0) {
            if (root.isTerminal) {
                return true;
            } else {
                return false;
            }
        } 
        
        let letter = word[0];
        if (letter in root.children) {
            return this.search(word.slice(1), root.children[letter]);
        } else {
            return false;
        }
    }
    
}


/// graphs 

function breadthFirstSearch(startingNode, targetVal) {
    if (!startingNode) return null
    console.log(startingNode)
    if (startingNode.val === targetVal) return startingNode;
    
    let visited = new Set()
    let queue = [startingNode]
    while (queue.length) {
        let node = queue.shift();

        if (!visited.has(node.val)){
            visited.add(node.val)
        } else {
            continue;
        }
        if (node.val === targetVal) return node;
        queue.push(...node.neighbors)
    }
    return null; 
}

//max value in graph

function maxValue(node, visited=new Set()) {
    if (!node) return null

    let res = [];
    let queue = [node]
    while (queue.length) {
        let node1 = queue.shift();

        if (!visited.has(node1.val)){
            visited.add(node1.val)
        } else {
            continue;
        }
        res.push(node1.val)
        queue.push(...node1.neighbors)
    }
    return Math.max(...res); 
}

//num regions graph

function numRegions(graph) {
    let res = 0;
    const visited = new Set()

    for(let node in graph){
    if(depthFirst(node, graph, visited)) res++
    }
    return res
}

function depthFirst(node, graph, visited){
    if (visited.has(node)) return false 
    visited.add(node)

    graph[node].forEach(neighbor => depthFirst(neighbor, graph, visited))

    return true 
}

//can finish courses

var canFinish = function(numCourses, prerequisites) {
    let prereq = buildGraph(prerequisites);
    let totalCourses = Object.keys(prereq).length;
    let completed = new Set();
    
    let eligibleCourseExists = true
    
    while(eligibleCourseExists){
        eligibleCourseExists = false;
        
        for(let course in prereq) {
            console.log(prereq, course)
            let everyPreBeenMet = prereq[course].every((pre) => completed.has(pre));
            if (!completed.has(course) && everyPreBeenMet) {
                eligibleCourseExists = true;
                completed.add(course);
            }
        }
    }
    
    return completed.size === totalCourses;
};

function buildGraph(list){
    let graph = {};
    list.forEach((prereq) => {
        let [ course, pre ] = prereq.map(String);
        if (course in graph){
            graph[course].push(pre);
        } else {
            graph[course] = [ pre ];
        }
        
        if (!(pre in graph)){
            graph[pre] = [];
        }
    });
    
    return graph;
}



///max heap
class MaxHeap {
    constructor(){
        this.array = [null];
    }

    getParent(idx){
        return Math.floor(idx / 2)
    }

    getLeftChild(idx){
        return 2 * idx 
    }

    getRightChild(idx){
        return 2 * idx + 1
    }

    siftUp(idx){
        if (idx === 1) return;

        let parent = Math.floor(idx / 2)
        if (this.array[idx] > this.array[parent]){
            [this.array[idx], this.array[parent]] = [this.array[parent], this.array[idx]]
            this.siftUp(parent)
        }
    }

    insert(val){
        this.array.push(val)
        this.siftUp(this.array.length - 1)
    }

    siftDown(idx){
        let ary = this.array;
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx); 
        let leftVal = ary[leftIdx];
        let rightVal = ary[rightIdx];

        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;
    
        if (ary[idx] > leftVal && ary[idx] > rightVal) return;
    
        if (leftVal < rightVal) {
          var swapIdx = rightIdx;
        } else {
          var swapIdx = leftIdx;
        }
    
        [ ary[idx], ary[swapIdx] ] = [ ary[swapIdx], ary[idx] ];
        this.siftDown(swapIdx);
    }

    deleteMax(){
        if (this.array.length === 2) return this.array.pop();
        if (this.array.length === 1) return null;
        
        let max = this.array[1]
        this.array[1] = this.array.pop()
        this.siftDown(1);
        return max
    }
}


///is Max heap?

function isMaxHeap(array) {
    // check if the tree is complete, i.e. there are no gaps like [null, 50, undefined, 20]
    let isComplete = array.every(el => el !== undefined);
    return isComplete && _isMaxHeap(array);
}

function _isMaxHeap(array, idx=1) {
    if (array[idx] === undefined) return true;
    let leftIdx = 2 * idx;
    let rightIdx = 2 * idx + 1;
    let leftVal = array[leftIdx] === undefined ? -Infinity : array[leftIdx];
    let rightVal = array[rightIdx] === undefined ? -Infinity : array[rightIdx];
    return array[idx] > leftVal && array[idx] > rightVal 
        && _isMaxHeap(array, leftIdx) && _isMaxHeap(array, rightIdx);
}


///trie

class Node {
    constructor(){
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor(){
        this.root = new Node()
    }

   insertRecur(word, root=this.root){
        let letter = word[0]
        if (!(letter in root.children)){
            root.children[letter] = new Node();
        }

        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {
            this.insertRecur(word.slice(1), root.children[letter]);
        }
    }

   insertIter(word){
        let node = this.root;
        
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];

            if (!(letter in node.children)) {
                node.children[letter] = new Node();
            }

            node = node.children[letter];
        }
        
        node.isTerminal = true;
   }

   searchRecur(word, root=this.root){
        if (word.length === 0) {
            if (root.isTerminal) {
                return true;
            } else {
                return false;
            }
        } 
        
        let letter = word[0];
        if (letter in root.children) {
            return this.searchRecur(word.slice(1), root.children[letter]);
        } else {
            return false;
        }
   }

   searchIter(word){
        let node = this.root;
        
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];

            if (!(letter in node.children)) {
                return false;
            }

            node = node.children[letter];
        }

        return node.isTerminal;
   }

   wordsWithPrefix(prefix, root=this.root){
        if (prefix.length === 0) {
            let allWords = [];

            if (root.isTerminal) allWords.push('');

            for (let letter in root.children) {
                let child = root.children[letter];
                
                let suffixes = this.wordsWithPrefix('', child);
                let words = suffixes.map(word => letter + word);
                allWords.push(...words);
            }

            return allWords;
        } else {
            let firstLetter = prefix[0];
            let child = root.children[firstLetter];

            if (child === undefined) {
                return [];
            } else {
                let suffixes = this.wordsWithPrefix(prefix.slice(1), root.children[firstLetter]);
                return suffixes.map(suffix => firstLetter + suffix);
            }
        }
   }

}