const swap = (targetArray, index1, index2) => {
  const currentElement = targetArray[index1];
  targetArray[index1] = targetArray[index2];
  targetArray[index2] = currentElement;
  return targetArray;
};

const createMaxHeap = (array) => {
  const maxHeap = [array[0]];
  for (let i = 1; i < array.length; i += 1) {
    maxHeap.push(array[i]);
    let currentIndex = i;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (maxHeap[currentIndex] > maxHeap[parentIndex]) {
        swap(maxHeap, currentIndex, parentIndex);
      }
      currentIndex = parentIndex;
    }
  }
  return maxHeap;
};

class HeapSort {
  constructor(array) {
    this.array = array;
  }

  sort() {
    const resultArray = [];
    let maxHeap = this.array;
    while (maxHeap.length > 0) {
      maxHeap = createMaxHeap(maxHeap);
      maxHeap = swap(maxHeap, 0, maxHeap.length - 1);
      const elementToAdd = maxHeap.pop();
      resultArray.unshift(elementToAdd);
    }
    this.array = resultArray;
  }

  returnValue() {
    return this.array;
  }
}

module.exports = { HeapSort, swap, createMaxHeap };
