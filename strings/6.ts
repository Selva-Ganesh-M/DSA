function findSubSequenceUsingPowerSet(str: string){
    let length = str.length;
    for (let i=0; i<2**length; i++){
        let entry = ""
        for (let j=0; j<length; j++){
            if (i & (1<<j)){
                entry+=str.charAt(j)
            }
        }
        console.log(entry)
    }
}
findSubSequenceUsingPowerSet("abc")