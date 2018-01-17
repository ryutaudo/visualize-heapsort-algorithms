class HeapSort {
  constructor(array) {
    this.array = array;
    this.maxHeap = [];
  }

  createMaxHeap() {
    this.maxHeap.push(this.array[0]);
    // loop though each element
    for (let i = 1; i < this.array.length; i += 1) {
      this.maxHeap.push(this.array[i]);
      let currentIndex = i;

      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.maxHeap[currentIndex] > this.maxHeap[parentIndex]) {
          const currentElement = this.maxHeap[currentIndex];
          this.maxHeap[currentIndex] = this.maxHeap[parentIndex];
          this.maxHeap[parentIndex] = currentElement;
        }
        currentIndex = parentIndex;
      }
    }
    return this.maxHeap;
  }

  sort() {
    // 1. create heap with given array
    // 2. swap root and last in heap
    // 3. element last element from heap
    // 4. get fist element of the heap and push to  
    // 5. get root value from heap and shift to array
    // 6. back to 1. until array has no value
  }

  returnValue() {
    return this.array;
  }
}

module.exports = HeapSort;
