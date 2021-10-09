var a = prompt("Give a number.");
var b = prompt("Give another number.");
var c = prompt("Give a number again.");

const array = [+a, +b, +c];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
};

document.write("The sum of all of your numbers is " + sum + ".");