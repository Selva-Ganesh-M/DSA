function f(arr: Array<number>, target: number, low: number=0, high: number=arr.length-1){
    let ans = high+1;
    while(low<=high){
        const mid = low + Math.floor((high-low)/2)
        if (arr[mid]>=target){
            ans = mid
            high = mid-1
        }
        else{
            low = mid+1
        }
    }
    return ans
}

// --- tests ---
const a = [1, 3, 3, 5, 7, 9];

// target present, first occurrence
console.assert(f(a, 3) === 1, `expected 1 but got ${f(a, 3)}`);

// target between values
console.assert(f(a, 4) === 3, `expected 3 but got ${f(a, 4)}`);

// target smaller than all
console.assert(f(a, 0) === 0, `expected 0 but got ${f(a, 0)}`);

// target larger than all
console.assert(f(a, 10) === a.length, `expected ${a.length} but got ${f(a, 10)}`);

// exact first element
console.assert(f(a, 1) === 0, `expected 0 but got ${f(a, 1)}`);

// duplicate highest lower_bound
console.assert(f(a, 3) === 1, `expected 1 but got ${f(a, 3)}`);

console.log("All lowerBound tests passed.");