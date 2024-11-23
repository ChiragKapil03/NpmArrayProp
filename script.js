// 1. Calculate the sum of an array
Array.prototype.sum = function () {
    return this.reduce((acc, num) => acc + num, 0);
  };
  
  // 2. Remove duplicates from an array
  Array.prototype.removeDuplicates = function () {
    return [...new Set(this)];
  };
  
  // 3. Find unique elements in an array
  Array.prototype.unique = function () {
    const frequency = this.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(frequency)
      .filter((key) => frequency[key] === 1)
      .map(Number);
  };
  
  // 4. Find the average of an array
  Array.prototype.average = function () {
    return this.length === 0 ? 0 : this.sum() / this.length;
  };
  
  // 5. Find the maximum value in an array
  Array.prototype.max = function () {
    return Math.max(...this);
  };
  
  // 6. Find the minimum value in an array
  Array.prototype.min = function () {
    return Math.min(...this);
  };
  
  // 7. Get the frequency of each element in an array
  Array.prototype.frequency = function () {
    return this.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {});
  };
  
  // 8. Sort the array in ascending order
  Array.prototype.sortAsc = function () {
    return [...this].sort((a, b) => a - b);
  };
  
  // 9. Sort the array in descending order
  Array.prototype.sortDesc = function () {
    return [...this].sort((a, b) => b - a);
  };
  
  // 10. Clear all elements from an array
  Array.prototype.clear = function () {
    this.length = 0;
    return this;
  };
  
  module.exports = Array;
  