class HeapSort {
  constructor(array) {
    this.array = array;
    this.maxHeap = [];
  }

  createMaxHeap() {
    this.maxHeap.push(this.array[0]);

    for (let i = 1; i < this.array.length; i += 1) {
      this.maxHeap.push(this.array[i]);
      let currentIndex = i;

      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        
        if (this.maxHeap[currentIndex] > this.maxHeap[parentIndex]) {
          this.swap(this.maxHeap, currentIndex, parentIndex);
        }
        currentIndex = parentIndex;
      }
    }
    return this.maxHeap;
  }

  swap(array, index1, index2) {
    const currentElement = array[index1];
    array[index1] = array[index2];
    array[index2] = currentElement;
    return array;
  }

  sort() {
    if (this.array.length === 0) {
      return;
    }
    // 1. create heap with given array
    this.createMaxHeap();
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
