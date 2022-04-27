let total = 0;
let i = 0;
let j = 1;
let sum = 0;
let count = 2;
let fibo : string = '0 1 ';
while(count <= 19){
    total = i+j;
    i = j;
    j = total;
    sum += total;
    count++;
    fibo += `${total} `
}
console.log(sum);
console.log(fibo);