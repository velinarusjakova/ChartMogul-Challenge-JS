'use strict';

function pascal(n) {
	var row = [];
  		row[0] = 1;
  
	for (var i = 0; i < n; i++) { 
		row.push(row[i]*(n-i)/(i+1));
	}
	
	return row;
}

console.log(pascal(process.argv[2]));