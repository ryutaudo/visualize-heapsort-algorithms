class HeapSort {
  constructor(array) {
    this.array = array;
    this.maxHeap = array;
  }

  createMaxHeap(array) {
    // loop though each element
      // if child value at [i] is greater than paraent at quotient of (i - 1)/2
        // swap the element
    return array;
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
