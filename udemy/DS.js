//Singly LinkedList;

// class Node {
//   constructor(val){
//     this.val = val;
//     this.next = null;
//   }
// }

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    const newNode = new Node(val);

    if (!this.head){
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop(){
    if(!this.head){
      return undefined;
    }

    let cur = this.head;
    let pre = cur;

    while(cur.next){
      pre = cur;
      cur = cur.next;
    } 
    this.tail = pre;
    this.tail.next = null;

    this.length--;

    if (this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return cur;
  }

  shift(){
    if (!this.head) return undefined;
    let cur = this.head;
    if(cur.next){
      this.head = cur.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return cur
  }

  unshift(val){
    const newN = new Node(val)
    if (!this.head){
      this.head = newN;
      this.tail = newN;
    } else {
      newN.next = this.head;
      this.head = newN;
    }
    this.length++;
    return this;
  }

  get(idx){
    if(idx < 0 || idx >= this.length) return null;
    if(!this.head) return null;
    let cur = this.head;
    let i = 0;
    while(i !== idx){
      i++;
      cur = cur.next;
    }

    return cur;
  }

  set(idx, val){
    let node = this.get(idx);
    if (node){
      node.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(idx, val){
    if(idx < 0 || idx > this.length) return false;
    if(idx === 0){
      return !!this.unshift(val)
    } else if (idx === this.length) {
      return !!this.push(val);
    }
    let newNode = new Node(val)
    let prev = this.get(idx - 1);
    let temp = prev.next
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(idx){
    if(idx < 0 || idx >= this.length) return undefined;
    if(idx === 0){
      return !!this.shift()
    } else if (idx === this.length-1) {
      return !!this.pop();
    }
    let foundNode = this.get(idx - 1);
    let removed = foundNode.next;
    foundNode.next = removed.next;
    this.length--;
    return removed; 
  }

  reverse(){
    let cur = this.head;
    this.head = this.tail;
    this.tail = cur;

    let next;
    let prev = null;

    while(cur){
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next; 
    }

    return this;
  }

  print(){
    let arr = [];
    let cur = this.head;
    while(cur){
      arr.push(cur.val)
      cur = cur.next;
    }
    console.log(arr)
  }
}

// let list = new SinglyLinkedList()
// list.push(55)
// // list.push(99)
// // list.pop()
// // list.shift()
// // list.shift()
// list.unshift(100)
// list.unshift(300)
// list.unshift(200)
// list.unshift(600)

// // console.log(list)
// console.log(list.get(1))
// console.log(list.get(4))
// console.log(list.set(1, 'hello'))
// console.log(list.remove(1))
// console.log(list.print())
// console.log(list.reverse())
// console.log(list.print())


/////////-----> DOUBLY Linked List

// class Node{
//   constructor(val){
//     this.val = val
//     this.next = null;
//     this.prev = null;
//   }
// }

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if (!this.length) return undefined;
    let node = this.tail 
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null
    }

    this.length--;
    return node;
  }

  shift(){
    if (!this.length) return undefined;
    let oldHead = this.head;
    if (this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null; 
    }

    this.length--;
    return oldHead;
  }

  unshift(val){
    let newNode = new Node(val)
    if(!this.length){
      this.head = newNode
      this.tail = newNode
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp
      temp.prev = this.head;
    }

    this.length++;
    return this;
  }


  get(i){
    if (i < 0 || i >= this.length) return null;
    let node;
    if (i <= this.length / 2) node = this.head;
    else node = this.tail;

    let counter;
    if(node === this.head){
      counter = 0
      while(i !== counter){
        node = node.next
        counter++
      }
    } else {
      counter = this.length - 1
      while(i !== counter){
        node = node.prev
        counter--
      }
    }
    return node;
  }

  set(i, val){
    let node = this.get(i);
    if(node){
      node.val = val
      return true 
    }
    return false 
  }

  insert(i, val){
    if (i < 0 || i > this.length) return false;
    if (i === 0) return !!this.unshift(val);
    if (i == this.length) return  !!this.push(val); 

    let node = this.get(i - 1);
    let newNode = new Node(val)
    let temp = node.next; 
    node.next = newNode;
    newNode.prev = node;
    newNode.next = temp;
    temp.prev = newNode;

    this.length++;
    return true;
  } 

  remove(i){
    if (i < 0 || i >= this.length) return false;
    if (i === 0) return !!this.shift();
    if (i === this.length - 1) return  !!this.pop();
    
    let foundNode = this.get(i);
    let beforeNode = foundNode.prev;
    let afterNode = foundNode.next;
    foundNode.next = null;
    foundNode.prev = null;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    this.length--;
    return foundNode;
  }
  reverse(){
    if(!this.head) return undefined;
    
    let cur = this.head
    this.head = this.tail
    this.tail = cur
    
    let next;
    let prev = null;
    
    
    while(cur){
        next = cur.next;
        cur.next = prev;
        cur.prev = next;
        prev = cur
        cur = next;
    }
    return this;
  }
}

// let dlist = new DoublyLinkedList();
// dlist.push(44)
// dlist.push(55)
// dlist.push(66)
// dlist.push(77)
// dlist.push(88)
// dlist.push(99)

// console.log(dlist.remove(4))
// console.log(dlist)


//// -----------> Stack

// class Node{
//   constructor(val){
//     this.val = val
//     this.next = null;
//   }
// }

class Stack {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0;
  }

  push(val){
    let newNode = new Node(val);
    if(!this.fisrt){
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first;
      this.first = newNode
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop(){
    if(!this.size) return null;
    let temp = this.first;

    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--
    return temp.val;
  }

}


///-------------> Queue

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val){
    const newNode = new Node(val);
    if(!this.size){
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    return ++this.size;
  }

  dequeue(){
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next

    this.size--;
    return temp.val;
  }
}

///------> BST

// class Node{
//   constructor(val){
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

class BST {
  constructor(){
    this.root = null;
  }

  insert(val){
    const newNode = new Node(val);
    if (!this.root) this.root = newNode;
    else {
      let cur = this.root;
      while(cur){
        if(val === cur.val) return undefined;

        if(val < cur.val){
          if(cur.left){
            cur = cur.left;
          } else{
            cur.left = newNode;
            break
          }
        } else if (val > cur.val) {
          if (cur.right){
            cur = cur.right;
          }else {
            cur.right = newNode
            break
          }
        }
      }
    }

    return this
  }

  find(val, root = this.root){
    if (!this.root) return false;

    let cur = root;
    if (cur.val === val) return true;
    if (val < cur.val){
      if(cur.left) return this.find(val, root=cur.left)
      else return false;
    } else {
      if(cur.right) return this.find(val, root=cur.right)
      else return false;
    }
  }

  ibfs(){
    if(!this.root) return undefined;
    const res = [];
    const queue = [this.root];
    while(queue.length){
      const visited = queue.shift();
      res.push(visited.val);
      if(visited.left) queue.push(visited.left);
      if(visited.right) queue.push(visited.right);
    }
    return res;
  }

  dfsPre(){
    if(!this.root) return undefined;
    const res = [];
    const stack = [this.root];
    while(stack.length){
      const visited = stack.pop();
      res.push(visited.val);
      if(visited.right) stack.push(visited.right);
      if(visited.left) stack.push(visited.left);
    }
    return res;
  }

  dfsPost(){
    const res = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      res.push(node.val);
    }
    traverse(this.root)
    return res;
  }

  dfsIn(){
    const res = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      res.push(node.val);
      if(node.right) traverse(node.right);
    }
    traverse(this.root)
    return res;
  }
}

// const bst = new BST();
// bst.insert(10)
// bst.insert(13)
// bst.insert(15)
// bst.insert(7)
// bst.insert(11)
// bst.insert(2)
// bst.insert(5)

// // console.log(bst.find(10))
// // console.log(bst.ibfs())
// // console.log(bst.dfsPre())
// // console.log(bst.dfsPost())
// console.log(bst.dfsIn())

//// --------> Heaps

class MaxBinaryHeap{
  constructor(){
    this.values = [41,39,33,18,27,12]
  }
  
  insert(val){
    this.values.push(val);
    this.bubbleUp()
  }

  bubbleUp(){
    let idx = this.values.length - 1;
    const ele = this.values[idx];
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.values[parentIdx];
      if (ele <= parent) break;
      this.values[parentIdx] = ele
      this.values[idx] = parent
      idx = parentIdx;
    }
  }

  extractMax(){
    // [this.values[0], this.values[this.values.length - 1] = this.values[this.values.length - 1], this.values[0]]
    let temp = this.values[0];
    this.values[0] = this.values[this.values.length-1]
    this.values[this.values.length-1] = temp
    // console.log(this.values)
    const root = this.values.pop();
    if (this.values.length > 0) {
      this.siftDown();
    }
    return root;
  }

  siftDown(){
    let idx = 0;
    const ele = this.values[idx];
    while(true){
      // let leftChild = this.values[(2*idx+1)];
      // let rightChild = this.values[(2*idx+2)];
      // if (leftChild > rightChild){
      //   if(ele < leftChild) {
      //     this.values[2*idx+1] = ele;
      //     this.values[idx] = leftChild;
      //     idx = 2*idx+1;
      //   } else {
      //     break
      //   }
      // }else{
      //   if(ele < rightChild) {
      //     this.values[2*idx+2] = ele;
      //     this.values[idx] = rightChild;
      //     idx = 2*idx+2;
      //   } else {
      //     break
      //   }
      // }

      let leftIdx = 2*idx+1;
      let rightIdx = 2*idx+2;
      let leftChild, rightChild;
      let swap = null;

      if(leftIdx < this.values.length){
        leftChild = this.values[leftIdx]
        if(leftChild > ele){
          swap = leftIdx
        }
      }
      if(rightIdx < this.values.length){
        rightChild = this.values[rightIdx]
        if((swap === null && rightChild > ele) || (swap !== null && rightChild > leftChild)){
          swap = rightIdx
        }
      }
      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = ele;
      idx = swap
    }
  }
}

// const maxH = new MaxBinaryHeap();
// maxH.insert(55)
// maxH.insert(1)
// maxH.extractMax()
// console.log(maxH)

class Node {
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(){
    this.values = []
  }
  
  enqueue(val,priority){
    let newNode = new Node(val, priority)
    this.values.push(newNode);
    this.bubbleUp()
  }

  bubbleUp(){
    let idx = this.values.length - 1;
    const ele = this.values[idx];
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.values[parentIdx];
      if (ele.priority >= parent.priority) break;
      this.values[parentIdx] = ele
      this.values[idx] = parent
      idx = parentIdx;
    }
  }

  dequeue(){
    // [this.values[0], this.values[this.values.length - 1] = this.values[this.values.length - 1], this.values[0]]
    let temp = this.values[0];
    this.values[0] = this.values[this.values.length-1]
    this.values[this.values.length-1] = temp
    // console.log(this.values)
    const root = this.values.pop();
    if (this.values.length > 0) {
      this.siftDown();
    }
    return root;
  }

  siftDown(){
    let idx = 0;
    const ele = this.values[idx];
    while(true){
      // let leftChild = this.values[(2*idx+1)];
      // let rightChild = this.values[(2*idx+2)];
      // if (leftChild > rightChild){
      //   if(ele < leftChild) {
      //     this.values[2*idx+1] = ele;
      //     this.values[idx] = leftChild;
      //     idx = 2*idx+1;
      //   } else {
      //     break
      //   }
      // }else{
      //   if(ele < rightChild) {
      //     this.values[2*idx+2] = ele;
      //     this.values[idx] = rightChild;
      //     idx = 2*idx+2;
      //   } else {
      //     break
      //   }
      // }

      let leftIdx = 2*idx+1;
      let rightIdx = 2*idx+2;
      let leftChild, rightChild;
      let swap = null;

      if(leftIdx < this.values.length){
        leftChild = this.values[leftIdx]
        if(leftChild.priority < ele.priority){
          swap = leftIdx
        }
      }
      if(rightIdx < this.values.length){
        rightChild = this.values[rightIdx]
        if((swap === null && rightChild.priority < ele.priority) || (swap !== null && rightChild.priority < leftChild.priority)){
          swap = rightIdx
        }
      }
      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = ele;
      idx = swap
    }
  }
}

// const ER = new PriorityQueue();
// ER.enqueue('cold', 5)
// ER.enqueue('gunshout wound', 1)
// ER.enqueue('fever', 4)
// console.log(ER)
// console.log(ER.dequeue())






///-----------------_> Hash Tables/Maps

//make arrLength prime number too to decrease number of collisions
function hash(key, arrLength){
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++){
    let char = key[i];
    let val = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + val) % arrLength;
  }
  return total 
}

// console.log(hash('pink', 13))
// console.log(hash('pinky', 13))
// console.log(hash('cyan', 13))

class HashTable{
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key){
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let val = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + val) % this.keyMap.length;
    }
    return total 
  }

  set(k, v){
    let store = this._hash(k);
    this.keyMap[store] ? this.keyMap[store].push([k, v]) : this.keyMap[store] = [[k, v]]
    return true;
  }

  get(k){
    let find = this._hash(k);
    if (this.keyMap[find]){
      for(let i = 0; i < this.keyMap[find].length; i++){
        if (this.keyMap[find][i][0] === k) return this.keyMap[find][i][1];
      }
    }
    return undefined; 

  }

  keys(){
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}


// const ht = new HashTable();
// ht.set('cyan', 'ff0000');
// ht.set('pink', 'ff1100');
// // console.log(ht.get('pink'));
// // console.log(ht.get('cyan'));
// console.log(ht.keys())
// console.log(ht.values())


///--------------------> Graphs

class Graph {
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(val){
    if (!this.adjacencyList[val]) this.adjacencyList[val] = [];
  }

  addEdge(v1, v2){
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  removeEdge(v1, v2){
    let idx1 = this.adjacencyList[v1].indexOf(v2)
    this.adjacencyList[v1].splice(idx1 ,1)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1) 
  }
}

const g = new Graph();
g.addVertex('Tokyo')
g.addVertex('Dubai')
g.addVertex('Honolulu')
g.addVertex('Moscow')
g.addEdge('Honolulu', 'Tokyo')
g.addEdge('Honolulu', 'Moscow')
g.removeEdge('Honolulu', 'Moscow')

console.log(g);


/// ------ cleaner solution to my Coding Challenge

function braces(vals){
  return vals.map(s => {
    if(validParen(s)) return 'YES'
    else return 'NO'
  })
}

function validParen(s){
  let obj = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  let stack = [];
  for(let i = 0; i < s.length; i++){
    if(obj[s[i]]){
      stack.push(s[i])
    } else {
      if (obj[stack.pop()] !== s[i]) return false;
    }
    console.log(stack)
  }

  return stack.length === 0;
}

// console.log(braces(['[{()}]', '[]]{', '{}', '[]()}', '{']))
// ------