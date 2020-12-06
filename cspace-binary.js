'use script'
// @ts-check

//// STEPS TO TAKE
// is array valid - DONE
// sort array - DONE
// find middle number - DONE
// request input - DONE
// compare middle number to input
// if middle number < input, get last half
// find middle num of last half
// if middle num < input, get last half
// compare, create new array, loop

var list = [11, 13, 17, 19, 2, 3, 5, 7];

// sort array using number sorter from https://raddevon.com/articles/sort-array-numbers-javascript/
const numberSorter = (a, b) => a - b;
list = list.sort(numberSorter);

// test function
function myFunction() {
    document.write("This is my list: " + list); 
}

// validate list is array
if (Array.isArray(list)) {
    myFunction();
}
else {
    document.write("This is not an array.");
};

// empty boolean for while num is still not found
found = false;

// get number from user input box
var userInput = document.getElementById("inputNum");

// Init a timeout variable to be used below
let timeout = null;

// Listen for keystroke events to get user input
userInput.addEventListener('keyup', function (e) {
    // Clear the timeout if it has already been set.
    // This will prevent the previous task from executing
    // if it has been less than <MILLISECONDS>
    clearTimeout(timeout);

    // Make a new timeout set to go off in 1000ms (1 second)
    timeout = setTimeout(function () {
        console.log('Input Value:', userInput.value);
    }, 1000);
});
var userNum = userInput.value;

document.write(userNum);
userNum = 47;

//// FUNCTION for binary search
function binarySearch(arr, target, start=0, stop=(arr.length-1)) {

    let midPoint = Math.floor(((stop-start)/2) + start)
  
    switch (true) {
      case arr[midPoint] === target:
        return true
      case stop - start === 0:
        return false
      case arr[midPoint] < target:
        return binarySearch(arr, target, midPoint+1, stop)
      case arr[midPoint] > target:
        return binarySearch(arr, target, start, midPoint)
    }
  }

//loop while num has not been found
while (found !== true) {
    // how many nums in list? divide by 2 for middle
    mid = (list.length)/2;
    document.write(mid);

    // is item actually in array? If not, notify user.
    if (list.indexOf(userNum) == -1) {
        document.write("Your number is not in this array! Please choose again.");
        break;
    }
    else {
        // begin at midpoint testing for equality
        for (i=mid; i<list.length; i++) {
            if (list[i] == userNum) {
                document.write("yes " + i);
                found = true;
                break
            }
            else if (list[i] > userNum ) {
                list = list.slice(0, i);
                mid = (list.length)/2;
                document.write("< " + list[i]);
            }
            else if (list[i] < userNum ) {
                list = list.slice(i, list.length);
                mid = (list.length)/2;
                document.write("> " +  list[i]);
            }
        }
    }
}