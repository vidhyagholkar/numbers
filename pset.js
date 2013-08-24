pset = function (input){
	var pows=[[]]
	for(var i = 0; i < input.length; i++){
		lenT = pows.length
		for (var j = 0; j < lenT; j++){
			pows.push(pows[j].concat(input[i]))
		}
	}
	return pows
}

exports.powerSet = pset;