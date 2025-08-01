function bruteForce(arr: Array<number>){
    arr.sort((a,b)=>a-b)
    console.log({arr})
    return arr[arr.length-1]
}



function optimal(arr: Array<number>){
    let largest = -Number.MAX_VALUE;
    for(let val of arr){
        if (val>largest){
            largest = val
        }
    }
    return largest;
}


const arr = [-9, 8 ,6 , 5, 4, 2, 11]
console.log(bruteForce(arr))

const _arr = [-9, 8 ,6 , 5, 4, 2]
console.log(optimal(_arr))

export default {}