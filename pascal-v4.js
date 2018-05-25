'use strict';

// factorial method
function fact(n) {
  if (n == 0) return 1;
  else return n*fact(n-1);
}

// binomial theorem, n choose k
function binomial(n,k){
	if (n-k <= 0) return 1;
	else if (k <= 0) return 1;
	else {
		return fact(n) / ( fact(k) * fact( n - k ) );
	}
}

function pascal(row_num) {
	var row =[];
	for (var i = 0; i <= row_num; i++){
		row.push(binomial(row_num, i));
	}
	return row;
}

console.log(pascal(process.argv[2]));