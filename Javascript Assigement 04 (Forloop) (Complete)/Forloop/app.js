// Print numbers from 1 to 10.

for (var i = 1; i <= 10; i++) {
  console.log(i + 0);
}

// Print even numbers from 1 to 20.

for (var i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Print odd numbers from 1 to 15.

for (var i = 1; i <= 15; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// Calculate and print the factorial of a number (let's say 5).

number = 5;
factorial = 1;
for (var i = 1; i <= number; i++) {
  factorial *= i;
}
console.log(`Factorial of ${number}: ${factorial}`);

// Print the multiplication table of a number (let's say 7) up to 10.

for (var i = 1; i <= 10; i++) {
    console.log(' 2 x ' + i + ' = ' + 2 * i );
  }

// Print the Fibonacci series up to the 10th term.

var  a = 0, b = 1;
console.log(a);
console.log(b);
for (var i = 1; i <= 10; i++) {
  var temp = a + b; // 1 + 2 // 3
  console.log(temp);
  a = b; // 1 => 2
  b = temp; // 2 => 3
}    

// Find and print the sum of digits of a number (let's say 123).

for (var i = 1; i <= 10; i++) {
    console.log(i + 0);
  }

// Print the reverse of a string (let's say "hello").

var string = "Hello"
var stringArray = string.split("");
console.log(stringArray);
var stringArrayReverse = stringArray.reverse();
console.log(stringArrayReverse);
var stringArrayReverseJoin = stringArrayReverse.join("");
console.log(stringArrayReverseJoin);

// Print the square of numbers from 1 to 10.

for (var i = 1; i <= 10; i++) {
  console.log(i * i);
}

// Find and print the largest element in an array (let's say [3, 7, 2, 9, 5]).

var num = [3, 7, 2, 9, 5];
var largestNum = 0;
for (var i = 1; i < num.length; i++) {
  if (num[i] > largestNum) {
    largestNum = num[i];
  }
}
console.log("Largest Number is =>", largestNum);
