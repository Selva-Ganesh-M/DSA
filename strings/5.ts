function findSubstrings (s: string) {
    const ans = ['']
    for (let i=0; i<s.length; i++){
        for (let j=i+1; j<s.length+1; j++){
            ans.push(s.slice(i, j))
        }
    }
    console.log(ans)
}
findSubstrings("selva")