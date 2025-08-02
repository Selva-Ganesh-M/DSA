function upperBound(arr: Array<number>, target: number): number {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (target < arr[mid]) {
      high = mid - 1;
      ans = mid;
      continue;
    }
    low = mid + 1;
  }
  return ans;
}

// Base tests
const arr = [1, 2, 3, 4, 5];
console.assert(upperBound(arr, 3) === 3, `fail-1: expected 3 got ${upperBound(arr, 3)}`);
console.assert(upperBound(arr, 1) === 1, `fail-2: expected 1 got ${upperBound(arr, 1)}`);
console.assert(upperBound(arr, 7) === 5, `fail-3: expected 5 got ${upperBound(arr, 7)}`);
console.assert(upperBound(arr, 2) === 2, `fail-4: expected 2 got ${upperBound(arr, 2)}`);

// Additional edge cases
// empty array
console.assert(upperBound([], 10) === 0, `empty array should return 0`);

// target less than min
console.assert(upperBound([5, 6, 7], 1) === 0, `target < min should be 0`);

// target greater than max
console.assert(upperBound([5, 6, 7], 10) === 3, `target > max should be length`);

// duplicates: upper bound for 2 in [1,2,2,2,3] is first index >2 which is 4
console.assert(upperBound([1, 2, 2, 2, 3], 2) === 4, `duplicates case failed`);

// exact max
console.assert(upperBound([1, 2, 3], 3) === 3, `upperBound of max should be length`);

// negative numbers
console.assert(upperBound([-5, -3, -1, 0], -3) === 2, `negative number case failed`);

// single element
console.assert(upperBound([10], 10) === 1, `single element equal`);
console.assert(upperBound([10], 5) === 0, `single element greater target`);
console.assert(upperBound([10], 15) === 1, `single element smaller target`);

console.log("all upperBound tests passed");

export default {}