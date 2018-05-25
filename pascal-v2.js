'use strict';

var memo = [];
for(var i=1; i<=process.argv[2]; i++) {
    memo[i] = [];
    for (var j = 1; j<=process.argv[2]; j++) {
    	memo[i][j] = 0;
    }
}

//recursive function with memoization
function rec(i,j) {

	if (memo[i][j]) return memo[i][j];

    if (i == 0 || j == 0 || j == i) {
    	memo[i][j] = 1;
    	return memo[i][j];
    }

    if (i ==1 && (j == 0 || j == 1)) {
    	memo[i][j] = 1;
    	return memo[i][j];
    }

    memo[i][j] = rec(i-1, j-1) + rec(i-1, j);
    return memo[i][j];
}

function pascal(n) {
	var row = [];
	for (var i=0; i<=n; i++) {
		row[i] = rec(n,i);
	}
	return row;
}

console.log(pascal(process.argv[2]));