function isSorted(arr: Array<number>): boolean{
    if (arr.length<=1) {
        return true
    }
    for (let i=1; i<arr.length; i++){
        if (arr[i]<arr[i-1]){
            return false
        }
    }
    return true
}

const arr: Array<number> = [5,4,3,2,4,6,7,8];
console.log(isSorted(arr.sort()))

export default {}