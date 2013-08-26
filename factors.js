#!/usr/bin/env node

factorize  = process.argv[2]
var N = factorize
, primeFactors = [ ]
, pow = require('./pset.js')
, strPrimeFactors = [ ]
, rptFactors = [ ]
, psetInt = [ ]
, prime = true
, allFactors =[ ];

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
if (N == uniquePrimes) {
	prime = true;
	console.log(N, 'is Prime')} else {
		prime = false;
		uniquePrimes.forEach(function(el){n = N; while (n%el === 0) {
			primeFactors.push(el)
			n /= el
		}
	})

    console.log('The Prime Factors are: ', primeFactors.join())
    console.log('The Unique Prime Factors are: ', uniquePrimes.join())
}

if (!prime){
primeFactors.forEach(function(el){strPrimeFactors.push(el.toString())})

    pset = pow.powerSet(strPrimeFactors)
    pset[0] = [1]


    for(var i = 0, len = pset.length; i<len; i++) {
	psetInt.push(pset[i].map(function(el){return parseInt(el,10)}))
}
    for(var i = 0, len = pset.length; i<len; i++) {
	rptFactors.push(psetInt[i].reduce(function(a,b){return a * b}))

}

rptFactors.sort(function(a,b){return a-b})

 for (var i=0; i<len; i++){
 	if(rptFactors[i] !== rptFactors[i+1]) {allFactors.push(rptFactors[i])}
 }
console.log('The factors of', N, 'are: ', allFactors.join())}
