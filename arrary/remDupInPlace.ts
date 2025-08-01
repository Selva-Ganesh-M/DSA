function func(arr: Array<number>): void{
    if (arr.length<=1){
        return;
    }
    let i=0;
    for (let j=1; j<arr.length; j++ ){
        if (arr[j]!=arr[i]){
            arr[i+1] = arr[j]
            i++
        }
    }
}

const arr: Array<number> = [1,1,2,2,2,3,4,4,5];
func(arr)
console.log(arr)

export default {}