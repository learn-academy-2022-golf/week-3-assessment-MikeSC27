// ASSESSMENT 3: Coding Practical Questions with Jest

// const { array } = require("yargs");

// const { NUMBER_UNARY_OPERATORS } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions

// Test Driven Development
// describe("funcName", () => {
//   it("what funcName will do", () => {
//     const var1 = ["1"]
//     const var1Output = ["2"]
//     const var2 = ["2"]
//     const var2Output = ["4"]
//     expect(funcName(var1)).toEqual(var1Output)
//     expect(funcName(var2)).toEqual(var2Output)
//   })
// })

// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Test Driven Development

// describe("numFib", () => {
//   it("a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
//     const fibLength1 = 6
//     const fibLength1Output = [1, 1, 2, 3, 5, 8]
//     const fibLength2 = 10
//     const fibLength2Output = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//     expect(numFib(fibLength1)).toEqual(fibLength1Output)
//     expect(numFib(fibLength2)).toEqual(fibLength2Output)
//   })
// })

// Jest Test RTN:
// ReferenceError: numFib is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

  // Pseudo Code:
   //The parameter will be the nth number of the Fibonacci equation, Fn=Fn-1 + Fn-2.
  // Create a function called numFib utilizing a for loop and the Fibonacci equation for the nth number. Also create a new array called plusUltra starting at values [1, 1] so that the output array will not start with 0. Then utilize Mutators .push() to fill array and .pop() to remove the last value of array to match .lenght with the input number. 
  // Inputs: a number greater than 2, the given two const fibLength1, and fibLength2.
  // Outputs: an array with .length equal to the input number, containing the numbers of the Fibonacci sequence. Expected const fibLength1Output = [1, 1, 2, 3, 5, 8] & const fibLength2Output = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55].
  // Finally run jest to verify function.


// My numFib function below
    function numFib(n) {
        for (var plusUltra = [1, 1], i = 1; i < n; i++)
        plusUltra.push(plusUltra[i] + plusUltra[i - 1]); plusUltra.pop()
        return plusUltra
      }
      console.log(numFib([fibLength1]))
      console.log(numFib([fibLength2]))

  // Jest Test Return
  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total
  // Snapshots:   0 total
  // Time:        0.201 s
  // Ran all test suites.
  // ✨  Done in 1.02s.

        // Code I was trying to get to work prior to above solution when I finally realized I needed another array returned if I wanted more than the last number in the sequece.
            // const numFib = (n) => {
            //   if(n < 3 ) 
            //   return 1;{  
            //   }
            //   return numFib(n-1) + numFib(n-1);
            // }
            // console.log(numFib([fibLength1]))
            // console.log(numFib([fibLength1]).forEach().join())

            //  const numFib = (n) => {
            //   let number1 = 1;
            //   let number2 = 1;
            //   for(i = 1, i < n; i++) { 
            //     let current = number1 + number2;
            //     number1 = number2;
            //     number2 = current;
            //     console.log(current)
            //   }
            // }

            // const numFib (num) => {
            //   for (let i = 1; i < num; i++) {
            //     console.log(numFib)
            //   }
            // }



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// Test Driven Development
// describe("sanchezToAli", (array) => {
//   it("a function that takes in an object and returns an array of the values sorted from least to greatest", (array) => {
//     const studyMinutesWeek1 = {
//       sunday: 90,
//       monday: 30,
//       tuesday: 20,
//       wednesday: 15,
//       thursday: 30,
//       friday: 15,
//       saturday: 60
//     }
//     const studyMinutesWeek1Output = [15, 15, 20, 30, 30, 60, 90]
//     const studyMinutesWeek2 = {
//       sunday: 100,
//       monday: 10,
//       tuesday: 45,
//       wednesday: 60,
//       thursday: 20,
//       friday: 15,
//       saturday: 65
//     }
//     const studyMinutesWeek2Output = [10, 15, 20, 45, 60, 65, 100]
//     expect(sanchezToAli(studyMinutesWeek1)).toEqual(studyMinutesWeek1Output)
//     expect(sanchezToAli(studyMinutesWeek2)).toEqual(studyMinutesWeek2Output)
//   })
// })

// Jest Test RTN:
// ReferenceError: sanchezToAli is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// // Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]



// b) Create the function that makes the test pass.
// Pseudo Code:
  //The parameter will be an object array
  // Create a function called, sanchezToAli,that takes in an object and returns an array of the values sorted from least to greatest utilizing .sort((a, b) => a - b). 
  // Inputs: objects, studyMinutesWeek1 & studyMinutesWeek2.
  // Outputs: an array of given object values sorted from low to highest value.  Expected const studyMinutesWeek1Output = [15, 15, 20, 30, 30, 60, 90] & const studyMinutesWeek2Output = [10, 15, 20, 45, 60, 65, 100].
  // Finally run jest to verify function.

    //*** Below are just console.logs that utilize the given objects and still call the correct answer without writing a function.  I just did this by accident trying to stack them to see what it would tell me.  
    // console.log((Object.values(studyMinutesWeek1)).sort((a, b) => a - b))
    // console.log((Object.values(studyMinutesWeek2)).sort((a, b) => a - b))


// This does work in Jest with the given paramenters and outputs the expected values as stated in the prompts.  Will not work on Jest since Jest is stating it is not a function.  Both of the below and above work on thier own just not with Jest due to the object array issue where returned info is not just an array but an object and .sort should only work on arrays.  It still works however Jest is not buying it as a function.  

// My sanchezToAli function below, or non-function.
    // const sanchezToAli = (array) => array.sort((a, b) => a - b);

    function sanchezToAli (array) {
        return array.sort((a, b) => a - b);
      }

  console.log(sanchezToAli(Object.values(studyMinutesWeek1)))
  console.log(sanchezToAli(Object.values(studyMinutesWeek2)))

  //Jest Test RTN:
  // FAIL  ./code-challenges.test.js
  // sanchezToAli
  //Test Suites: 1 failed, 1 total
  // Tests:       1 failed, 1 total
  // Snapshots:   0 total
  // Time:        0.228 s, estimated 1 s

            // old ones that did not produce the desired response.
              //     function sanchezToAli (array) {
                    //   array.sort((a, b) => a - b);{
                    //   }if(a < b){
                    //   return -1;
                    // } if(a > b){
                    //   return 1;
                    // } else return 0;
                    // };
              // const sanchezToAli = sanchezToAli.sort((a, b) => a - b);
              //   function sanchezToAli(array) {
              //     let sanchezToAli = [];
              //     for (let i = 0; i < sanchezToAli.length; i++) {
              //         var rank = 1;
              //         for (let j = 0; j < sanchezToAli.length; j++) {
              //             if (sanchezToAli[j] > sanchezToAli[i]) rank++;
              //         }
              //         sanchezToAli.push(rank);
              //     }
              //     return sanchezToAli;
              // }
              //   console.log(sanchezToAli(Object.values(studyMinutesWeek1)))
              // let sanchezToAli = numbers.sort((a, b) => a - b)





// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// Test Driven Development
// describe("acumenSum", () => {
//   it("a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
//     const accountTransactions1 = [100, -17, -23, -9]
//     const accountTransactions1Output = [100, 83, 60, 51]
//     const accountTransactions2 = [250, -89, 100, -96]
//     const accountTransactions2Output = [250, 161, 261, 165]
//     const accountTransactions3 = []
//     const accountTransactions3Output = []
//     expect(acumenSum(accountTransactions1)).toEqual(accountTransactions1Output)
//     expect(acumenSum(accountTransactions2)).toEqual(accountTransactions2Output)
//     expect(acumenSum(accountTransactions3)).toEqual(accountTransactions3Output)
//   })
// })

// Jest Test RTN:
//ReferenceError: acumenSum is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
// Pseudo Code:
  //The parameter will be an array
  // Create a function called, acumenSum, that takes in an array of numbers and utilizing HoF, .map(), and with the sum starting at zero it will take the first value add zero becoming the first sum, then moves that to the next value adding the new sum utilizing, sum += value, to the second value and so on through the array until it returns a new array of the accumulating sum. An empty array should return an empty array. 
  // Inputs: arrays, accountTransactions1, accountTransactions2, accountTransactions3.
  // Outputs: A new array of the accumulating sum of the input array. An empty array should still return an empty array.
  // Finally run jest to verify function.

    //*** Single line console.log like I was able to do on question two, below. 
    // console.log((accountTransactions1).map((sum => value => sum += value)(0)));

// My acumenSum function below
      const acumenSum = array => array.map((sum => value => sum += value)(0));

      console.log(acumenSum(accountTransactions1))
      console.log(acumenSum(accountTransactions2))
      console.log(acumenSum(accountTransactions3))

      // Jest Test Return
      // PASS  ./code-challenges.test.js  
        // acumenSum
      // Test Suites: 1 passed, 1 total
      // Tests:       1 passed, 1 total
      // Snapshots:   0 total
      // Time:        0.199 s, estimated 1 s
      // Ran all test suites.
      // ✨  Done in 1.08s.