class minHeap {
  constructor() {
    this.heap = [];
  } 

  firstNode(){
    return this.heap[0]
  }

  lastNode() {
    return this.heap[this.heap.length - 1];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }

  insert(value) {
    this.heap.push(value);
    let newNodeIdx = this.heap.length - 1;
    while (newNodeIdx > 0 && this.heap[newNodeIdx] < this.heap[this.parentIndex(newNodeIdx)]) {
      [this.heap[newNodeIdx], this.heap[this.parentIndex(newNodeIdx)]] = [this.heap[this.parentIndex(newNodeIdx)], this.heap[newNodeIdx]];
      newNodeIdx = this.parentIndex(newNodeIdx);
    }
  }

  delete() {
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let trickleNodeIndex = 0;
    while(this.hasLesserChild(trickleNodeIndex)) {
      const lesserChildIndex = this.calculateLesserChildindex(trickleNodeIndex);
      [this.heap[trickleNodeIndex], this.heap[lesserChildIndex]] = [this.heap[lesserChildIndex], this.heap[trickleNodeIndex]];
      trickleNodeIndex = lesserChildIndex;
    }
    return min;
  }

  hasLesserChild(index) {
    return this.heap[this.leftChildIndex(index)] && this.heap[this.leftChildIndex(index)] < this.heap[index] 
      || this.heap[this.rightChildIndex(index)] && this.heap[this.rightChildIndex(index)] < this.heap[index];
  }

  calculateLesserChildindex(index) {
    if (!this.heap[this.rightChildIndex(index)]) {
      return this.leftChildIndex(index);
    }
    if (this.heap[this.rightChildIndex(index)] < this.heap[this.leftChildIndex(index)]) {
      return this.rightChildIndex(index);
    } else {
      return this.leftChildIndex(index);
    }
  }

}

const myMinHeap = new minHeap();
myMinHeap.insert(5);
myMinHeap.insert(3);
myMinHeap.insert(7);
myMinHeap.insert(2);
myMinHeap.insert(4);
myMinHeap.insert(6);

console.log(myMinHeap.heap);
console.log(myMinHeap.lastNode());
console.log(myMinHeap.firstNode());

console.log("insertion completed ");

console.log(myMinHeap.delete());
console.log(myMinHeap.heap);
console.log(myMinHeap.lastNode());
console.log(myMinHeap.firstNode());