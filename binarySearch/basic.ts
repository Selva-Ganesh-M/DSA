function bs(arr: Array<number>, target: number): number | -1{
    let low=0; 
    let high=arr.length-1
    while (low<=high){
        const mid = Math.floor((low+high)/2)
        if (arr[mid] == target){
            return mid
        }
        if (target<arr[mid]){
            high = mid-1
        }
        else {
            low = mid+1
        }
    }
    return -1
}

const arr: Array<number> = [1,2,3,4,5,6,8]
console.log(bs(arr, 7))

export default {}