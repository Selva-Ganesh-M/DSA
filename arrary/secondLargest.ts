function bruteForce(arr: Array<number>){
    arr.sort((a, b)=>a-b)
    const last = arr[arr.length-1]
    let secondLast = -Infinity;
    let i=arr.length-1
    while(i>=0){
        if (arr[i]>secondLast && arr[i]<last){
            secondLast = arr[i]
        };
        i--;
    }
    return secondLast
}

function better (arr: number[]){
    let largest = -Infinity
    for (let num of arr){
        if (num>largest){
            largest = num
        }
    }
    let secondLargest = -Infinity
    for (let num of arr){
        if (num>secondLargest && num<largest){
            secondLargest=num;
        }
    }
    return secondLargest
}


function optimal(arr: Array<number>){
    let largest = arr[0]
    let secondLargest = -Infinity
    for (let i=1; i<arr.length; i++){
        if (arr[i]>largest){
            secondLargest = largest
            largest = arr[i]
            continue;
        }
        if (arr[i]>secondLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
    
}

const arr = [-9, 8 ,6 , 5, 4, 2, 11, 23]
console.log(bruteForce(arr))

const _arr = [-9, 8 ,6 , 5, 4, 2, 23]
console.log(better(_arr))

const __arr = [-9, 8 ,6 , 5, 4, 2, 22, 55]
console.log(optimal(__arr))