'use script'
// @ts-check

//// STEPS TO TAKE
// 1. is array valid - DONE
// 2. request input - DONE
// 3. sort array - DONE
// 4. find middle number - DONE
// 5. compare middle number to input - DONE switch case starting line 62
// 6. if middle number < input, get last half - DONE - switch case line 69
// 7. if middle num < input, get last half - DONE - switch case line 71
// 8. find middle num of first/last half - DONE - recursively with switch case until num is found
// 9. compare, create new array, loop - DONE - no longer creating new array thanks to solution mentioned above; recursively eval original array in switch case lines 69-72

var list = [11, 13, 17, 19, 2, 3, 5, 7];

// sort array using number sorter from https://raddevon.com/articles/sort-array-numbers-javascript/
const numberSorter = (a, b) => a - b;
list = list.sort(numberSorter);


// get number from user input box
var userInput = document.getElementById("inputNum");

// Init a timeout variable to be used below
let timeout = null;

// Define var for input
var userNum;

// Listen for keystroke events to get user input
userInput.addEventListener('keyup', function (e) {
    // Clear the timeout if it has already been set.
    // This will prevent the previous task from executing
    // if it has been less than <MILLISECONDS>
    clearTimeout(timeout);

    // Make a new timeout set to go off in 1000ms (1 second)
    timeout = setTimeout(function () {
        console.log('Input Value:', userInput.value);
        userNum = Math.floor(userInput.value);
    }, 1000);
});

// validate list is array
function validateArray() {
    if (Array.isArray(list)) {
        binarySearch(list, userNum, start=0, stop=(list.length-1));
    }
    else {
        document.write("This is not an array.");
    };
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
        document.write("Your " + userNum + " is not in the array! " + list);
        return false
      case list[mid] < userNum:
        return binarySearch(list, Number(userNum), mid+1, stop)
      case list[mid] > userNum:
        return binarySearch(list, Number(userNum), start, mid)
    }
  }


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