'use script'
// @ts-check

var list = [11, 13, 17, 19, 2, 3, 5, 7];

// sort array using number sorter from https://raddevon.com/articles/sort-array-numbers-javascript/
const numberSorter = (a, b) => a - b;
list = list.sort(numberSorter);


// get number from user input box
// var userInput = document.getElementById("inputNum");

// Init a timeout variable to be used below
let timeout = null;

//  -- Define USER INPUTS --
// Define var for array
var userArr;
// Define var for input
var userNum;


// Listen for keystroke events to get user input
// userInput.addEventListener('keyup', function (e) {
//     // Clear the timeout if it has already been set.
//     // This will prevent the previous task from executing
//     // if it has been less than <MILLISECONDS>
//     clearTimeout(timeout);

//     // Make a new timeout set to go off in 1000ms (1 second)
//     timeout = setTimeout(function () {
//         console.log('Input Value:', userInput.value);
//         userNum = Math.floor(userInput.value);
//     }, 1000);
// });

// validate users input list is array
function validateArray(userArr, userNum) {
    console.log(userArr)
    if (Array.isArray(userArr)) {
        // binarySearch(userArr, userNum, start=0, stop=(list.length-1));
        itemsAreInts(userArr)
    }
    else {
        document.write("This is not an array.");
    };
}

//// Function array items are ints
function itemsAreInts(list) {
  if (list.every(list => Number.isInteger(list))) {
    console.log("Thank you for entering an array of only integers.")
  }
  else {
    console.log("Your array contains items other than numbers. Please refresh the page and enter an array containing ONLY integers.");
  }
}

//// FUNCTION for binary search
function binarySearch(list, userNum, start=0, stop=(list.length-1)) {
    // using Math floor to round down to nearest int (1.7 = 1) so we can find mid of array
    let mid = Math.floor(((stop-start)/2) + start);
    // document.write("The mid is: " + mid + "/n");
    // document.write("The length is: " + list.length);
  
    switch (true) {
      case list[mid] === userNum:
        document.write("The index of your number is: " + mid);
        return true
      case stop - start === 0:
        document.write(userNum + " is not in the array! Please reload the page and pick from one of the following numbers " + list);
        return false
      case list[mid] < userNum:
        return binarySearch(list, Number(userNum), mid+1, stop)
      case list[mid] > userNum:
        return binarySearch(list, Number(userNum), start, mid)
    }
  }

// JQuery for buttons
$("#inputArr").keypress(function(event) { 
  if (event.keyCode === 13) {
    // Store user array
    userArr = ($('#inputArr').val()).split`,`.map(x=>+x).sort(numberSorter);
    userNum = 4;
    console.log(userArr);
    // validate it is an array and if so, binary search it 
    validateArray(userArr, userNum); 
  } 
}); 

$("#pass").keypress(function(event) { 
  if (event.keyCode === 13) { 
      $("#GFG_Button").click(); 
  } 
}); 

$("#GFG_Button").click(function() { 
  alert("Button clicked"); 
}); 


//// ORIGNAL PATH before changing to switch case above /////  
// empty boolean for while num is still not found
// found = false;

//loop while num has not been found
// while (found !== true) {
//     // how many nums in list? divide by 2 for middle
//     mid = (list.length)/2;
//     document.write(mid);

//     // is item actually in array? If not, notify user.
//     if (list.indexOf(userNum) == -1) {
//         document.write("Your number is not in this array! Please choose again.");
//         break;
//     }
//     else {
//         // begin at mid testing for equality
//         for (i=mid; i<list.length; i++) {
//             if (list[i] == userNum) {
//                 document.write("yes " + i);
//                 found = true;
//                 break
//             }
//             else if (list[i] > userNum ) {
//                 list = list.slice(0, i);
//                 mid = (list.length)/2;
//                 document.write("< " + list[i]);
//             }
//             else if (list[i] < userNum ) {
//                 list = list.slice(i, list.length);
//                 mid = (list.length)/2;
//                 document.write("> " +  list[i]);
//             }
//         }
//     }
// }