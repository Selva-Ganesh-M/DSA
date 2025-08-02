function lowerBound(arr: Array<number>, target: number){
    let low = 0, high = arr.length-1, ans = arr.length;
    while(low<=high){
        const mid = Math.floor(low+(high-low)/2);
        if (target<=arr[mid]){
            ans = mid;
            high = mid-1;
            continue;
        }
        low = mid+1
    }
    return ans
}

console.log(`-- testing starts --`)

console.assert (lowerBound([1,1,1,2,2,2], 1)===0, `f-1`)
console.assert (lowerBound([1,1,1,2,2,2], 10)===6, `f-1`)
console.assert (lowerBound([0,2,2,2], 1)===1, `f-1`)
console.assert (lowerBound([0,2,2,2], 2)===1, `f-1`)

console.log(`-- testing ends --`)

// export default {}
