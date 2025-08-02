function f(arr: Array<number>, target: number){
    let low = 0;
    let high = arr.length-1
    let ans = arr.length
    while(low<=high){
        const mid = Math.floor(low+(high-low)/2);
        if (target<=arr[mid]){
            ans = mid;
            high = mid-1;
            continue;
        }
        low = mid+1;
    }
    return ans;
}

console.log(`-- testing starts --`)

console.assert (f([1,2,3,4,5,5], 5)===4, `f-1`)
console.assert (f([1,2,3,4,5,5], 6)===6, `f-2`)
console.assert (f([1,2,3,4,5,5], 6)===6, `f-3`)

console.log(`-- testing ends --`)

export default {}



// console.log(`-- testing starts --`)

// console.assert (f()===, ``)

// console.log(`-- testing ends --`)

// export default {}