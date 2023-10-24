// //Write a loop that prints the numbers from 1 to 10.
// for(let i = 1; i < 10; i++){
//     document.write(i)
// }


// //Write a loop that prints the even numbers from 1 to 20.
// for (let i = 1; i < 20; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }


// //Write a loop that calculates the sum of numbers from 1 to 50.
// let sum = 0;
// for (let i = 1; i <= 50; i++){
//     sum += i;
// }
// console.log(sum)


// //Write a loop that prints the multiplication table for a given number (e.g., 5 times table).
// let givenNumber = Number(prompt("Enter a number"));
// for (let i = 1; i < 10; i++){
//         console.log(`${givenNumber} * ${i} = ${givenNumber*i}`);
//     }


// //Write a loop that calculates the factorial of a number entered by the user.
// let userNumber = Number(prompt("Enter a number"));
// let fact = 1;
// for (let i = 1; i <= userNumber; i++) {
//     fact *= i;
// }
// console.log("factorial of userNumber is " + fact);

// //Write a loop that finds and prints the prime numbers between 1 and 50.
// for (let number = 2; number <= 50; number++) {
//     let isPrime = true;
  
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
  
//     if (isPrime) {
//       console.log(number);
//     }
//   }
  

// //Write a loop that reverses a string entered by the user.
// let inputString = prompt('Please enter a word');
// let reverseString = '';
// for (let char of inputString) {
//     reverseString = char + reverseString;
// }
// console.log(reverseString);
