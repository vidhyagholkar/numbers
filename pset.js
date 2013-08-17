a=['a','b','c','d','e']

function pset(input){
	var result=[[]]
	for(var i = 0; i < input.length; i++){
		lenT = result.length
		for (var j = 0; j < lenT; j++){
			result.push(result[j].concat(a[i]))
		}
	}
	return result
}
console.log(pset(a))
