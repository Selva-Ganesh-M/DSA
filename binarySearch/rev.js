function getLowerBound(arr=[1,2,3,3,5,8,8,10,10,11], src=12){
    let low = 0;
    let high = arr.length-1;
    let lowerBound = high+1;
    while (low<=high){
        let mid = Math.floor((low + high)/2)
        if (arr[mid]>=src){
            lowerBound = mid;
            high = mid-1
        }else{
            low = mid +1
        }
    }
    console.log(lowerBound)
}
getLowerBound()