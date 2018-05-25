'use strict';

//recursive function
function rec(i,j) {
    if (i == 0 || j == 0 || j == i) return 1;

    if(i ==1 && (j == 0 || j == 1)) return 1;

    return rec(i-1, j-1) + rec(i-1, j);
}

function pascal(n) {
	var row = [];
	for (var i=0; i<n; i++) {
		row[i] = rec(n,i);
	}
	return row;
}

console.log(pascal(process.argv[2]));