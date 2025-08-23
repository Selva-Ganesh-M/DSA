function isPrime(n){
    let factors = []
    for (let i=1; i*i<=n; i++){
        if (n%i==0){
            factors.push(i);
            let otherValue = n/i;
            if (otherValue!=i){
                factors.push(otherValue)
            }
        }
    }
    console.log(factors?.length===2)
}
isPrime(43)