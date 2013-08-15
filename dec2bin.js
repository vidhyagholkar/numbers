n = process.argv[2]

z = []

var dec2bin = function(n) {
if (n == 0) { return z }
else {z.unshift(n%2) ; return dec2bin( ~~ (n/2))}
}

result = (n == 0) ? '0' : dec2bin(n).join('');

console.log(result)
