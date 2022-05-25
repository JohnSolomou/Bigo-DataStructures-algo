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

// accessing array
strings[2]; //O(1) accesses the index of 2 in array the letter c
//push
strings.push("e"); //O(1) insert

//pop
strings.pop(); // takes on item off the end of array

strings.unshift("x"); //O(n) adds to beginning of array

strings.splice(2, 0, "alien"); // O(n)will add at alien to the second index and remove nothing

// two types of arrays static and dynamic. static array is limited you have to specify the number of items. dynamic array allows you to copy the array and add to it.

//advanced javascript
//reference type
// var object1 = {value: 10}//put in an address
// var object2 = object1; // reference the address where object1 is stored in
// var object3 = {value:10}// is stored in a different new address
//context vs scope
// function a(){
//   let b=4; //scope is only inside function
// }
// const object4 ={
//   a: function(){
//     console.log(this)
//   }
// }

//instantiation makes a copy of an object
// class player{
//    constructor(name,type){
//      this.name = name;
//      this.type = type;
//    }
//    introduce(){
//      console.log(`hi i am ${this.name},I'm a ${this.type}`)
//    }
// }
// class Wizard extends Player{
//   console.log(this)
//   constructor(name,type){
//     super(name,type)
//   }
//   play(){
//     console.log(`weeee I'm a ${this.type}`)
//   }
// }
// const wizard1 = new Wizard('John','Healer')
// const wizard = new Wizard('James','Creator')

//build an array from scratch
// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   get(index) {
//     return this.data;
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }
//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   delete(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//   }
//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }
// const newArray = new MyArray();
// newArray.push("hello");
// newArray.push("world");
// newArray.push("you");
// newArray.delete(1);
// newArray.pop(); // will not show last item
// console.log(newArray);
// strings and array
// string question reverse a string
//Create a function that reverses a string :
//"hi my name is john "
//nhoj si eman ym ih
var Niko = "Hi there Niko.";
Niko.split().reverse().join();
function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not a string";
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
  //
}
reverse(Niko);
console.log(reverse(Niko));
// reverse a string using javascript built in methods
function reverse2(str) {
  return str.split("").reverse().join("");
}
reverse2(Niko);
console.log(reverse2(Niko));
// one line function using es6
const reverse3 = (str) => str.split("").reverse().join("");
reverse3(Niko);
console.log(reverse3(Niko));
//merge sorted array
function mergeSortedArrays(array1, array2) {
  // const mergedArray = [];
  // let array1Item = array1[0];
  // let array2Item = array2[0];
  // i = 1;
  // j = 1;
  // //check input
  // if (array1.length === 0) {
  //   return array2;
  // }
  // if (array2.length === 0) {
  //   return array1;
  // }

  // while (array1Item || array2Item) {
  //   console.log(array1Item, array2Item);
  //   if (!array2Item || array1Item < array2Item) {
  //     mergedArray.push(array1Item);
  //     array1Item = array1[i];
  //     i++;
  //   } else {
  //     mergedArray.push(array2Item);
  //     array2Item = array2[j];
  //     j++;
  //   }
  // }

  // return mergedArray;
  let result = [...array1, ...array2];
  return result.sort((a, b) => a - b);
}

// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log(mergeSortedArrays([0, 3, 4, 31, 44, 45, 55], [4, 6, 30, 31, 33]));

const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];

function mergeTwo(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
}

console.log(mergeTwo(arr1, arr2));

//two sum

//hash tables objects key value pairs

let superhuman = {
  age: 42,
  name: "John",
  ability1: "fly",
  ability2: "laser eyes",
  frustrated: function () {
    console.log("ahhhh!");
  },
};
superhuman.age; //O(1)
superhuman.ability3 = "super strength";
superhuman.frustrated();
console.log(superhuman);
//when there is a collision of information in the same memory address this makes the hash table O(n/k) or O(n)
//Map() this function allows us to store strings numbers and even functions as key where objects only allow strings as key.
// const a = new Map(); // saves keys and values with any data type
// const b = new Set(); //only sets keys no values

//creating hashtable
// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//   }
//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }
//   set(key, value) {
//     let address = this._hash(key);
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   } // O(1)
//   get(key) {
//     let address = this._hash(key);
//     const currentBucket = this.data[address];
//     if (currentBucket) {
//       for (i = 0; i > currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     }
//     return undefined;
//   }
//   keys() {
//     const keysArray = [];
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         keysArray.push(this.data[i][0][0]);
//       }
//     }
//     return keysArray;
//   }
// }
// const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 10000);
// myHashTable.set("apples", 55);
// myHashTable.set("oranges", 2);
// myHashTable.get("grapes");

//google question
//given an array = [2,5,1,2,3,5,1,2,4]
//first recurring number
//it should return 2

//given an array = [2,1,1,2,3,5,1,2,4]
//it should return 1

//given an array = [2,3,4,5]
//it should return undefined

// function firstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// }O(n^2)
// console.log(firstRecurringCharacter([0, 9, 7, 6, 3, 5, 1, 2, 4]));
//using hashtable or object

function firstRecurringCharacter2(input) {
  //loop through all items in array and add them to hashtable. while doing that we can check if property already exists.
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
  // console.log(map);
  return undefined;
} //O(n)
console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]));

//link lists
//const basket = ['apples','grapes','pears'];
//linked list: apples --> grapes --> pears

//apples
//4567 --> grapes
//         7654  --> pears
//                    435 -->null

let obj1 = { a: true };
let obj2 = obj1; //this is a pointer or a reference to another address in memory

// 10-->5-->16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {}
}

const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// console.log(myLinkedList);
console.log(myLinkedList.append(5));
