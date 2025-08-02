function longestCommonPrefix(arr: string[]){
    if (arr.length<=0){
        return ""
    }
    let prefix = arr[0]
    for (let i=1; i<arr.length; i++){
        while(!arr[i].startsWith(prefix)){
            prefix = prefix.slice(0, -1);
            if (!prefix){
                return ""
            }
        }
    }
    return prefix
}

// --- tests ---
console.assert(longestCommonPrefix(["flower", "flow", "flight"]) === "fl", "test1 failed");
console.assert(longestCommonPrefix(["dog", "racecar", "car"]) === "", "test2 failed");
console.assert(longestCommonPrefix(["interview", "internet", "internal"]) === "inter", "test3 failed");
console.assert(longestCommonPrefix(["same", "same", "same"]) === "same", "test4 failed");
console.assert(longestCommonPrefix(["prefix", "pref"]) === "pref", "test5 failed");
console.assert(longestCommonPrefix([]) === "", "test6 failed");
console.assert(longestCommonPrefix(["single"]) === "single", "test7 failed");

console.log("longestCommonPrefix tests passed");