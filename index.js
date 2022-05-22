// const nemo = ["nemo"];

// function findNemo(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("found nemo");
//     }
//   }
//   let t1 = performance.now();
//   console.log("call to find nemo took " + (t1 - t0) + "milliseconds");
// }
// findNemo(nemo); // O(n) --->linear time

// function compressFirstBox(boxes) {
//   console.log(boxes[0]); // O(1) constant time (this function will get the first item over and over again)
// }
//box function example

// const boxes = [0, 1, 2, 3, 4, 5];
// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]); // O(1) constant time
//   console.log(boxes[1]); // O(1) constant time
// }
// logFirstTwoBoxes(boxes); // O(2)

// What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//   let a = 10; //O(1)
//   a = 50 + 3; //O(1)

//   for (let i = 0; i < input.length; i++) {
//     //O(n) the n = the input
//     anotherFunction(); // O(n)
//     let stranger = true; //O(n)
//     a++; //O(n)
//   }
//   return a; //O(1)
// }
// BIG O NOTATION  IS 3 steps of O(1) plus 4 steps of O(n)
//BIG O(3 +4n) all of this gets simplified to O(n)
// What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//   let a = 5;//O(1)
//   let b = 10;//O(1)
//   let c = 50;//O(1)
//   for (let i = 0; i < input; i++) {//O(n)
//     let x = i + 1;//O(n)
//     let y = i + 2;//O(n)
//     let z = i + 3;//O(n)

//   }
//   for (let j = 0; j < input; j++) {//O(n)
//     let p = j * 2;//O(n)
//     let q = j * 2;//O(n)
//   }
//   let whoAmI = "I don't know";//O(1)
// }
//BIG O (4 + 7n) then turns to O(n)
// 4 rules of BIG O
// rule 1 : worst case
//making nemo found a more efficient function by stopping at nemo getting rid of extra runs after nemo is found by adding a break
// const nemo = ["nemo"];
// const everyone = [
//   "dory",
//   "bruce",
//   "marlin",
//   "nemo",
//   "gill",
//   "bloat",
//   "nigel",
//   "squirt",
//   "darla",
//   "hank",
// ];
// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log("running");
//     if (array[i] === "nemo") {
//       console.log("found nemo");
//       break;
//     }
//   }
// }
// findNemo(everyone); // BIG O doesn't care where in the array the item is it goes to the end even if nemo is in the middle. the worst case . that is why you use a break to stop the function from continuing.

// rule 2 : Remove constants when you drop the constants it becomes O(n)

// rule 3 : different terms for inputs
// function compressBoxesTwice(boxes) {
//   boxes.forEach(function (boxes) {
//     console.log(boxes);
//   });
//   boxes.forEach(function (boxes) {
//     console.log(boxes);
//   });
// }
//BIG O IS O(2n) dropping the constants makes it O(n)
// function compressBoxesTwice(boxes, boxes2) {
//   //added extra input here will change big O
//   boxes.forEach(function (boxes) {
//     console.log(boxes);
//   });
//   boxes2.forEach(function (boxes) {
//     console.log(boxes);
//   });
// }
//BIG o now becomes O(a + b) or O(boxes + boxes2)

// log all pairs of array
// const boxes = [1, 2, 3, 4, 5];
// function logAllPairsOfArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) console.log(array[i], array[j]);
//   }
// }
// logAllPairsOfArray(boxes);
// BIG O(n*n) this is BIG o(N^2) thats squared  Quadratic time this is very high on the big o chart. this is very bad slow
//nested indentation one loop inside of another will be multiplied O(n*n)
//on rule #3 we saw two loops but not nested so it is addition O(a + b)
// rule 4 : dorp non dominants
// function printAllNumbersThenAllPairSums(numbers) {
//   console.log("these are the numbers:");
//   numbers.forEach(function (number) {
//     console.log(number);
//   });
//   console.log("and these are their sums:");
//   numbers.forEach(function (firstNumber) {
//     numbers.forEach(function (secondNumber) {
//       console.log(firstNumber + secondNumber);
//     });
//   });
// }
// printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
// the BIG O for this is O(n + n^2) but if we drop the dominant it turns to BIG
//O(N^2) WE LOOK AT SCALABILITY THE DOMINANT ONE WILL ALWAYS BE THE ONE THAT CAN BECOME BIGGER.

//space complexity
// function booooo(n) {
//   for (let i = 0; i < n.length; i++) {
//     console.log("Boooo!");
//   }
// }
// booooo([1, 2, 3, 4, 5]); //space complexity of O(1)

// function arrayOfHiNTimes(n) {
//   let hiArray = [];
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = "hi";
//   }
//   return hiArray;
// }
// arrayOfHiNTimes(6); //O(n)

//Exercise twitter
// const array = [
//   { tweet: "hi", date: 2012 },
//   { tweet: "bye", date: 2014 },
//   { tweet: "john", date: 2018 },
// ]; // O(n^2)

// array[0]; // O(1)
// array[array.length - 1]; //O(1)

// "aksdlkjfasldkjfaskld".length; // the .length is property of an object O(1)

// const nemo = ["nemo"];
// const everyone = [
//   { name: "dory" },
//   { name: "bruce" },
//   { name: "marlin" },
//   { name: "nemo" },
//   { name: "gill" },
//   { name: "bloat" },
//   { name: "nigel" },
//   { name: "squirt" },
//   { name: "darla" },
//   { name: "hank" },
// ];

// try {
//   everyone.forEach((fish) => {
//     console.log("running");
//     if (fish.name == "nemo") console.log(fish.name);
//   });
// } catch (e) {
//   if (e !== "break") throw e;
// }did not break so will run full array after finding nemo

// const findNemo2 = (array) => {
//   array.forEach((fish) => {
//     console.log("running");
//     if (fish === "nemo") {
//       console.log("Found nemo");
//       return;
//     }
//   });
// };

// findNemo2(everyone);
// given 2 arrays , create a function that let's a user know (true/false) weather these two arrays contain any common items
//for example :
//const array1 = ["a","b","c","x"];
//const array2 = ["z","y","i"]
//should return flase
//const array1 = ["a","b","c","x"];
//const array2 = ["z","y","x"];
//should return true.
// brute force strategy
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];

// function containsComminItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       console.log(arr1[i], arr2[j]);
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// containsComminItem(array1, array2);
// console.log(containsComminItem(array1, array2)); // O(a*b)not the best solution

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", 1];
//steps to solve array1 to be converted to and object
//array1 ==> obj{
//a: true,
//b: true,
//c: true ,
//x: true
//}
//array2[index] === obj.properties

function containscommonItem2(arr1, arr2) {
  //loop through first array and create object where properties === items in the array
  // can we assume there are 2 params
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // console.log(map);
  // loop through second array and check if item is second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
} // this becomes O(a + b)
// containscommonItem2(array1, array2);
// console.log(containscommonItem2(array1, array2));

//more readable javascript using specific methods

function containsComminItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}
containsComminItem3(array1, array2);
console.log(containsComminItem3(array1, array2));
//DATA STRUCTURES
//arrays

var strings = ["a", "b", "c", "d"];

//push
strings.push("e");

//pop
strings.pop();

strings.unshift();
