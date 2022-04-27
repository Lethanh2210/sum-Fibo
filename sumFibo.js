var total = 0;
var i = 0;
var j = 1;
var sum = 0;
var count = 2;
var fibo = '0 1 ';
while (count <= 19) {
    total = i + j;
    i = j;
    j = total;
    sum += total;
    count++;
    fibo += "".concat(total, " ");
}
console.log(sum);
console.log(fibo);
