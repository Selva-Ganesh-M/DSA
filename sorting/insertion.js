function insertionSort (arr) {
    for (i=1; i<arr.length; i++){
        let j = i-1;
        let value = arr[i]
        while(j>-1 && arr[j]>value){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = value
    }
}

const arr = [5,4,3,2,1]
insertionSort(arr)
console.log(arr)