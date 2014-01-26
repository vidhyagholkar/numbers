function ehcf(a, b){


    if (b === 0) return [1, 0, a]

    t = ehcf(b, a % b)
	return [t[1] , t[0] - t[1] * Math.floor(a/b), t[2]]
}



//console.log(ehcf(421,111))
//console.log(ehcf(16457,1638))
