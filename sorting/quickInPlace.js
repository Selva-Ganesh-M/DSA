function partition(arr, low, high) {
    pivot = arr[high]
    let i = low-1
    for (let j=low; j<high; j++){
        if (arr[j]<=pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i+1], arr[high]]=[arr[high], arr[i+1]]
    return i+1
}

function quickSortInPlace(arr, low=0, high=arr.length-1){
    if (low<high){
        const pIndex = partition(arr, low, high);
        quickSortInPlace(arr, low, pIndex-1)
        quickSortInPlace(arr, pIndex+1, high)
    }
    
}

const arr = [5,4,3,2,1]
quickSortInPlace(arr)
console.log(arr)