function convertDecimalToBinary (num) {
    if (isNaN(num)){
        throw new Error("Please provide a valid number.");
    }
    let res = ""
    while (num>1){
        res = num % 2 + res
        num = Math.floor(num/2)
    }
    res = num + res
    console.log(res)
}

convertDecimalToBinary(95)