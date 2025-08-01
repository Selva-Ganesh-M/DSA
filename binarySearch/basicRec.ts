function bs(arr: Array<number>, target: number, low: number, high: number): number{
    if (low>high){
        return -1
    }
    const mid = Math.floor((low+high)/2)
    if (arr[mid] === target){
        return mid
    }
    if (target<arr[mid]){
        return bs(arr, target, low, mid-1)
    }
    return bs(arr, target, mid+1, high)
}



const arr: Array<number> = [1,2,3,4,5,6,8]
console.log(bs(arr, 7, 0, arr.length-1))

export default {}