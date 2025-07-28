function quickSorting (arr) {
    if (arr.length<=1){
        return arr
    }
    
    const pivot = arr[0]

    const left = []
    const right = []
    
    for (let i=1; i<arr.length; i++){
        if (arr[i]<=pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSorting(left), pivot, ...quickSorting(right)]
}

const arr = [5, 4, 3, 2, 1]
const ans = quickSorting(arr)
console.log({ans})