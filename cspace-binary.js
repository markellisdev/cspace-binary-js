'use script'
// @ts-check

//// STEPS TO TAKE
// sort array - DONE
// find middle number - DONE
// request input
// compare middle number to input
// if middle number < input, get last half
// find middle num of last half
// if middle num < input, get last half
// compare, create new array, loop

var list = [11, 13, 17, 19, 2, 3, 5, 7];

// sort array using number sorter from https://raddevon.com/articles/sort-array-numbers-javascript/
const numberSorter = (a, b) => a - b;
list = list.sort(numberSorter);
document.write(list);

// empty boolean for while num is still not found
found = false;

// get number from user
userNum = 47

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