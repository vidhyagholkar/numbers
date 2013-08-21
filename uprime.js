#!/usr/bin/env node
// Unique prime factors 
factorize  = process.argv[2]
N = factorize



isPrime = function(tryprime) {
	var check = 2
	while(check <= Math.sqrt(tryprime)){
		if (tryprime%check !== 0){
		check+=1} else {
				return false
			}
		}
		return true
	}

// Main function builds an array of Primes for testing

listOfPrimes = function (N){

	var foundP = [2]
	, tp = 3;

	while (tp  <=  N){
		if (isPrime(tp)){foundP.push(tp)}
			tp+=2

	}

	return foundP
}

//  list of Unique Prime Factors
foundP = listOfPrimes(N)
lPF =  foundP.filter(function(el){return N%el == 0 })

if (N == lPF[0]) {
    console.log(N, ' is a prime number')
    } else 
    { console.log('The Unique Prime Factors are: ', lPF.join().toString())
    }
