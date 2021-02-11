let c = 3;
let d = 5;
c = d + 1;
d = 10;
c = c * d;
c = c * d;

// What is the value of c:
3

// ... after line 3 executes?
c is 6

// ... after line 4 executes?
c is 6

// ... after line 5 executes?
60

// ... after line 6 executes?
600