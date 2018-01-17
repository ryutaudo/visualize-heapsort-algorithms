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
    it('should return an array of max heap', () => {
      // Setup
      const heapSortIns = new HeapSort([4, 10, 3, 5, 1]);
      const expected = [10, 5, 3, 4, 1];
      // Exercise
      heapSortIns.createMaxHeap();
  
      // Assert
      expect(heapSortIns.maxHeap).to.eql(expected);
    });
  });

  describe('swap method', () => {
    it('should swap first and last element of array', () => {
      // Setup
      const heapSortIns = new HeapSort([4, 10, 3, 5, 1]);
      const expected = [1, 10, 3, 5, 4];
      // Exercise
      const actual = heapSortIns.swap([4, 10, 3, 5, 1], 0, 4);
  
      // Assert
      expect(actual).to.eql(expected);
    });
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
