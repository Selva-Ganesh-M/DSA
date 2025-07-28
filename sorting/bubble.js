function bubbleSort(arr){
    for (let i=0; i<arr?.length-1; i++){
        for (let j=0; j<arr?.length-1-i; j++){
            if (arr[j+1]<arr[j]){
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            }
        }
    }
}

const arr = [5,4,3,2,1]
bubbleSort(arr)
console.log(arr)