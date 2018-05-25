'use strict';

var bigInt = require("big-integer");

function pascal(n) {
  var row = [];
  row[0] = row[n] = '1';
  
  for (var i = 0; i < n/2; i++) { 
    var el = bigInt(row[i]).multiply((n-i)).divide(i+1);
    row[i+1] = row[n-i-1] = el.toString();
  }
  
  return row;
}

console.log(pascal(process.argv[2]));