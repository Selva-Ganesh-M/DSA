function brute(arr: Array<number>){
    arr.sort()
    if (arr?.length<=1){
        return -1
    }
    let greatest = arr[arr.length-1]
    let secondLargest = null;
    for (let i=arr.length-1; i>=0; i--){
        if (arr[i]<greatest){
            if (!secondLargest){
                secondLargest = arr[i];
                break;
            }
        }
    }
    console.log(secondLargest ?? -1)
}

function optimal (arr: Array<number>){
    let largest = -Infinity
    let sLargest = -Infinity
    let i=0;
    while (i<arr.length){
        const curr = arr[i]
        if (curr>largest){
            sLargest = largest;
            largest = curr;
            i++;
            continue;
        }
        if (curr>sLargest && curr<largest){
            sLargest = curr
        }
        i++;
    }
    console.log(sLargest == -Infinity ? -1 : sLargest)
}

const arr = [9,9,9,7]
brute(arr)
optimal(arr)


