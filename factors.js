#!/usr/bin/env node

factorize  = process.argv[2]
var N = factorize
, primeFactors =[];


isPrime = function(tryprime) {
	var check = 2
	while(check <= Math.sqrt(tryprime)){
		if (tryprime%check !== 0) { 
		check +=1 } else {
				return false
			}
		}
		return true
	}

// Main function builds an array of Primes for testing

listOfPrimes = function (N){

	var foundP = [2]
	, tp = 3;

	while (tp  <=  N) {
		if (isPrime(tp)) { foundP.push(tp) }
			tp += 2
	}
	return foundP
}

//  All primes
foundP = listOfPrimes(N)
uniquePrimes =  foundP.filter(function(el){ return N%el === 0 })
if (N == uniquePrimes){
	console.log(N, 'is Prime')} else {
		uniquePrimes.forEach(function(el){n = N; while (n%el === 0) {
			primeFactors.push(el)
			n /= el
		}
	})
		console.log('The Prime Factors are: ', primeFactors.join().toString())
		console.log('The Unique Prime Factors are: ', uniquePrimes.join().toString())
}


