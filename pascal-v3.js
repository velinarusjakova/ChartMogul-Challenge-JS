'use strict';

function pascal (n) {
	var row = [];
	    row[0] = [1];
	    row[1] = [1,1];

	for (var i = 2; i < n+1; i++) {
	    row[i] = [1];
	    for (var j = 1; j <= i-1; j++) {
	        row[i][j] = row[i-1][j] + row[i-1][j-1];
	        row[i].push(1);
	    }
	}

	return row[n];
}

console.log(pascal(process.argv[2]));