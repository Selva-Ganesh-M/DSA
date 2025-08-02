function largeOddNumberInString(_: string){
    const str = _.replace(/\D+/g, "")
    let max = -Infinity
    for (let char of str){
        const current: number = +char;
        if (current % 2 === 1 && current > max){
            max = current
        }
    }
    return max
}