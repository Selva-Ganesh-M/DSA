function mergeSort(arr){
    if (arr?.length<=1){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid,))

    let i=0; 
    let j=0;
    const ans = []

    while (i<left.length && j<right?.length){
        if (left[i]<right[j]){
            ans.push(left[i])
            i++
        }else{
            ans.push(right[j])
            j++
        }
    }

    while(i<left.length){
        ans.push(left[i])
        i++
    }

    while (j<right.length){
        ans.push(right[j])
        j++
    }
    return ans

}

const arr = [5,4,3,2,1]
const ans = mergeSort(arr)
console.log(ans)