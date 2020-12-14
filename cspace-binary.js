'use strict'
// @ts-check


// sort array using number sorter from https://raddevon.com/articles/sort-array-numbers-javascript/
const numberSorter = (a, b) => a - b;

//  -- Define USER INPUTS --
// Define var for array
var userArr;
// Define var for input
var userNum;

// validate users input list is array
function validateArray(userArr) {
    console.log(userArr)
    if (Array.isArray(userArr)) {
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
    document.querySelector('#userNumSection').style.display = 'block'
  }
  else {
    console.log("Your array contains items other than numbers. Please refresh the page and enter an array containing ONLY integers.");
  }
}

//// FUNCTION for binary search
function binarySearch(list, userNum, start=0, stop=(userArr.length-1)) {
    // using Math floor to round down to nearest int (1.7 = 1) so we can find mid of array
    let mid = Math.floor(((stop-start)/2) + start);

    switch (true) {
      case list[mid] === userNum:
        document.querySelector('#finalSection').innerHTML = `The index of your number is: ${mid}`;
        console.log("The index of your number is: " + mid);
        return true
      case stop - start === 0:
        document.write(userNum + " is not in the array you provided! Please reload the page and try again.");
        return false
      case list[mid] < userNum:
        return binarySearch(list, Number(userNum), mid+1, stop)
      case list[mid] > userNum:
        return binarySearch(list, Number(userNum), start, mid)
    }
  }

// For capturing inputs / Button presses
document.querySelector('#inputArr').onkeypress = function(event) {
  if (event.keyCode == 13) {
    // Store user array
    userArr = ($('#inputArr').val()).split`,`.map(x=>+x).sort(numberSorter);
    console.log(userArr);
    // validate it is an array and if so, binary search it 
    validateArray(userArr); 
  }
};

document.querySelector('#FindNum_Button').onclick = function() {
  userNum = parseInt(document.querySelector('#inputNum').value) 
  binarySearch(userArr, userNum, 0, stop=(userArr.length-1));
  console.log("FindNum_Button:" + userArr + userNum);   
}