const HeapSort = require('../src/Sort');
const { expect } = require('chai');

describe('Sort', () => {
  it('should be a function', () => {
    expect(HeapSort).to.be.a('function');
  });
  it('should have a sort method', () => {
    expect(HeapSort.prototype.sort).to.be.a('function');
  });
  
  describe('createMaxHeap method', () => {
    // Setup
    const heapSortIns = new HeapSort();
    const expected = [10, 5, 3, 4, 1];
    // Exercise
    const actual = heapSortIns.createMaxHeap([4, 10, 3, 5, 1]);

    // Assert
    expect(actual).to.eql(expected);
  });

  describe('sort method', () => {
    it('should return sorted array', () => {
      // Setup
      const heapSortIns = new HeapSort([4, 10, 3, 5, 1]);
      const expected = [1, 3, 4, 5, 10];
      // Exercise 
      heapSortIns.sort();
      const actual = heapSortIns.returnValue();
  
      // Assert
      expect(actual).to.eql(expected);
    });
  })
});
