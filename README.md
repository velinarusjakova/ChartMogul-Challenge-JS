# ChartMogul-Challenge-JS

The problem specifies that given a number "n" we need to return the n-th row of the pascal triangle2. A pascal triangle is defined as a triangle of elements where each element is equal to the sum of the elements above him. In a mathematical notation this would be:

elem(i, j) = elem(i-1, j-1) + elem(i-1, j)

As we can see, the very definition of the problem specifies a reccurent relation so the most naive approach to this problem would be to implement a recursive algorithm that calculates each element of the required row independently using recursion. This approach can be found in file "PASCAL-V1". If we analyze the performance of the algorithm, we can notice that the memory complexity is O(n) and the time complexity is O(2^n).

The exponential time complexity is worrying, however one can notice that we can easily use memoization to prevent redundant recursive calls. This takes us to a top-down dynamic programming approach that can be found in "PASCAL-V2". The memory complexity is now O(n^2), which is worse than what we had previously, but we managed to reduce the time complexity from exponential to polynomial, or more precicely to O(n^2). 

In "PASCAL-V3" an iterative bottom-up dynamic programming approach can be found. The time and memory complexity are the same as "PASCAL-V2", however by avoiding recursion we avoid the possibility of getting a stack overflow.

Another possible approach is to use the binomial coefficients formula. Each element (i, j), where i denotes the row, and j denotes the column, in the pascal triangle is also defined as:

C_(i, j) = i! / [j!(i - j)!]

A solution using this formula can be found in the file "PASCAL-V4". The memory complexity is O(n), and the time complexity is O(n^2). At first it seems that it is better than the dynamic programming approaches, due to the lower memory consumption, but the problem with this approach lies in the calculation of the factorials. The factorial is one of the fastest growing functions, so even for relatively small numbers the result cannot be naively saved in a variable. At least not in most programming languages. This however can be solved by using a BigInteger approach, which is the idea of representing numbers as arrays. Some programming languages have a library that have all the necessary operations and number representations implemented for us. An example of using such a library can be found later in this readme file.

The best we can do on this problem is a O(n) memory complexity, and O(n) time complexity. We can achieve this by using a special property of the pascal elements within a single row, i.e.:

elem(i, j) = elem(i, j-1) * (i-j) / (j+1)

A solution using this property and the symmetry of the rows in a pascal triangle can be found in "PASCAL-V5" and "PASCAL-V6" accordingly. A proof that this is the best we can in terms of both time and memory complexity is the fact that it is not possible to assign n values in less than n steps.

The only "problem" with the previous solution is that for large values it encounters the same problem that was mentioned during the explanation of the binomial coefficients approach. Finaly, an implementation to "PASCAL-V6" that uses the BigInteger library and solves this problem can be found in "PASCAL-V7". One last thing to mention, is that the time and memory complexity will also rise, depanding on how the BigInteger library stores the numbers and performs operations. As we are working with arrays that represent numbers, even the simplest operations can't achieve O(1).











