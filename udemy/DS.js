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

class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

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
}

const bst = new BST();
bst.insert(10)
bst.insert(13)
bst.insert(15)
bst.insert(7)
bst.insert(11)
bst.insert(2)
bst.insert(5)

console.log(bst.find(10))
console.log(bst.ibfs())