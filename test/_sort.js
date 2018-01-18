const Sort = require('../src/Sort');
const HeapSort = Sort.HeapSort;
const swap = Sort.swap;
const createMaxHeap = Sort.createMaxHeap;
const { expect } = require('chai');

describe('Sort', () => {
  describe('createMaxHeap function', () => {
    it('should return an array of max heap', () => {
      // Setup
      const expected = [10, 5, 3, 4, 1];
      // Exercise
      const actual = createMaxHeap([4, 10, 3, 5, 1]);
      // Assert
      expect(actual).to.eql(expected);
    });
  });

  describe('swap function', () => {
    it('should swap first and last element of array', () => {
      // Setup
      const expected = [1, 10, 3, 5, 4];
      // Exercise
      const actual = swap([4, 10, 3, 5, 1], 0, 4);
  
      // Assert
      expect(actual).to.eql(expected);
    });
  });

  describe('HeapSort class', () => {
    it('should be a function', () => {
      expect(HeapSort).to.be.a('function');
    });
    it('should have a sort method', () => {
      expect(HeapSort.prototype.sort).to.be.a('function');
    });
    
  
    describe('sort method', () => {
      it('should return sorted array', () => {
        // Setup
        const heapSortIns = new HeapSort([4, 10, 3, 5, 1]);
        const expected = [1, 3, 4, 5, 10];
        // Exercise 
        const actual = heapSortIns.sort();
        // Assert
        expect(actual).to.eql(expected);
      });
    });
  });
});
