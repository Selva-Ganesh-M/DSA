function getFactors(n, sendOnlyPrime=false){
    let factors = []
    for (let i=1; i*i<=n; i++){
        if (n%i==0){
            if (sendOnlyPrime){
                if (isPrime(i)){
                    factors.push(i);
                }
            }else{
                factors.push(i)
            }
            let otherValue = n/i;
            if (otherValue!=i){
                if (sendOnlyPrime){
                    if (isPrime(otherValue)){
                        factors.push(otherValue)        
                    }
                }else{
                    factors.push(otherValue)
                }
            }
        }
    }
    return factors
}
const isPrime = (n) => getFactors(n)?.length==2
const primeFactors = getFactors(109, true)
console.log(primeFactors)