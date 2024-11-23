require('./index');

const arr = [3, 1, 2, 3, 4, 1, 5];

console.log("Sum:", arr.sum()); // Output: 19
console.log("Remove Duplicates:", arr.removeDuplicates()); // Output: [3, 1, 2, 4, 5]
console.log("Unique Elements:", arr.unique()); // Output: [2, 4, 5]
console.log("Average:", arr.average()); // Output: 2.714
console.log("Max:", arr.max()); // Output: 5
console.log("Min:", arr.min()); // Output: 1
console.log("Frequency:", arr.frequency()); // Output: { '1': 2, '2': 1, '3': 2, '4': 1, '5': 1 }
console.log("Sorted Asc:", arr.sortAsc()); // Output: [1, 1, 2, 3, 3, 4, 5]
console.log("Sorted Desc:", arr.sortDesc()); // Output: [5, 4, 3, 3, 2, 1, 1]
console.log("Clear Array:", arr.clear()); // Output: []
