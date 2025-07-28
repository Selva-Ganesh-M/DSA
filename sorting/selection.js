const selectionSort = (arr) => {
    for (let i=0; i<arr.length; i++){
        let min = i
        for (let j=i; j<arr.length; j++){
            if (arr[min]>arr[j]){
                min = j
            }
        }
        if (min!=i){
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
}

const arr = [5,4,3,2,1]
selectionSort(arr)
console.log(arr)