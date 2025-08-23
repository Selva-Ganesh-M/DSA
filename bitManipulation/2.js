function convertBinaryToDecimal(binaryNum){
    let val = 0;
    let twosPowerAggregate = 1;
    for (let i=binaryNum?.length-1; i>=0; i--){
        if(binaryNum?.charAt(i)=='1'){
            val+=twosPowerAggregate;
        }
        twosPowerAggregate *= 2;
    }
    console.log(val)
}

convertBinaryToDecimal("1101")