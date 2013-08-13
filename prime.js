//!/usr/bin/env node
// file preliminaries

var fs = require('fs')
, outfile = "primes.txt";

if (process.argv.length == 3){
	noOfPrimes = process.argv[2]} else {

		noOfPrimes = 10
	}

//  Trial check for prime

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

// Main function builds an array containing the first N Primes

listOfPrimes = function (firstNPrimes){

	var foundP = [2]
	, out ="Prime numbers"
	, tp = 3;

	while (foundP.length < firstNPrimes){
		if (isPrime(tp)){foundP.push(tp)}
			tp+=2
	}

	return foundP
}

//console.log(listOfPrimes(noOfPrimes).join().toString())
//dump to file


fs.writeFileSync(outfile,listOfPrimes(noOfPrimes).join().toString())
