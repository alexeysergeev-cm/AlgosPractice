//Singly LinkedList;

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

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

let list = new SinglyLinkedList()
list.push(55)
// list.push(99)
// list.pop()
// list.shift()
// list.shift()
list.unshift(100)
list.unshift(300)
list.unshift(200)
list.unshift(600)

// console.log(list)
console.log(list.get(1))
console.log(list.get(4))
console.log(list.set(1, 'hello'))
console.log(list.remove(1))
console.log(list.print())
console.log(list.reverse())
console.log(list.print())


