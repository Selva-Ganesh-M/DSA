function seive(size=31){
    const arr = Array(size+1).fill(1)
    const ans = []
    for (let i=2; i<arr.length; i++){
        if (arr[i]==1){
            ans.push(i)
            for (let j=i+i; j<arr.length; j=j+i){
                if (arr[j]==1){
                    arr[j]=0;
                }
            }
        }
    }
    console.log(ans)
}
seive()