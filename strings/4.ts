function reverseWordsInString(str: string){
    if (!str){
        return str;
    }
    let ans = ""
    let start = 0;
    for (let end=0; end<=str.length; end++){
        if (str[end]===" "){
            let currentWord = str.slice(start, end)
            if (ans){
                currentWord+=" "
            }
            ans = currentWord + ans
            start = end+1
        }
    }
    const lastWord = str.slice(start)
    if (lastWord){
        ans = lastWord+" "+ans
    }
    return ans
}

console.assert(reverseWordsInString('I am a man')==="man a am I", `1 - ${reverseWordsInString('I am a man')}`)