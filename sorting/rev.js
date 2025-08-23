function selectionSort(arr = [5,2,3,1,4]){
    for (let i=0; i<arr.length-1; i++){
        let smallIndex = i;
        for (let j=i+1; j<arr.length; j++){
            if (arr[j]<arr[smallIndex]){
                smallIndex = j
            }
        }
        if (smallIndex!=i){
            [arr[i], arr[smallIndex]]=[arr[smallIndex], arr[i]]
        }
    }
    console.log(arr)
}

selectionSort()

function bubbleSort(arr=[5,2,3,1,4]){
    const input = arr;
    for (let i=0; i<input?.length-1; i++){
        for (let j=0; j<input?.length-i-1; j++){
            if (input[j]>input[j+1]){
                [input[j], input[j+1]] = [input[j+1], input[j]]
            }
        }
    }
    console.log(input)
}

bubbleSort()

function insertionSort(arr=[5,2,3,1,4]){
    for (let i=1; i<arr.length; i++){
        let curr = arr[i];
        let j = i-1;
        while (j>=0){
            if (arr[j]>curr){
                arr[j+1] = arr[j];
            j--
            }else{
                break;
            }
        }
        arr[j+1]=curr
    }
    console.log(arr)
}
insertionSort()


























