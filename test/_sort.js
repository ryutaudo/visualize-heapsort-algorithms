const HeapSort = require('../src/Sort');
const { expect } = require('chai');

describe('Sort', () => {
  it('should be a function', () => {
    expect(HeapSort).to.be.a('function');
  });
  it('should have a sort method', () => {
    expect(HeapSort.prototype.sort).to.be.a('function');
  });
  it('should return sorted array', () => {
    // Setup
    const heapSortIns = new HeapSort([4, 10, 3, 5, 1]);
    
    // Exercise 
    heapSortIns.sort();
    const expected = heapSortIns.returnValue();

    // Assert
    expect(expected).to.eql([1, 3, 4, 5, 10]);
  })
});
