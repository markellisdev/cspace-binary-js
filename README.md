# Binary Search Exercise

<table>
<tr>
<td>
  An exercise to create a binary search without using libraries, just vanilla js.
</td>
<tr>
</table>

## Thoughts/Solution Process
Originally started out with vanilla JS using if-else statements....
but then found [this solution using switch cases](https://stackoverflow.com/a/44633141/6615341). I don't yet have the knowledge or the tests to prove this is faster, but from the author's explanation, it makes sense to me why it would/could be as array sizes get larger.

Have this working but want to write validations for confirming array has integers only....
Now, succesfully evaluating using [this article about checking if objects in an array fullfill a condition](https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/#:~:text=Checking%20if%20objects%20in%20array%20fulfill%20a%20condition%20-%20Array.every,%20Array.includes) and the [JavaScript isInteger method](https://www.w3schools.com/jsref/jsref_isinteger.asp).

Added functionality to display the option to find a number, only after a correct/valid array has been entered. - line 54 of itemsAreInt function, which is triggered only after array has been evaluated as valid array.

## Edited original list here to actual STEPS TAKEN
<p><s>This was originally STEPS TO TAKE</s></p>

1. is array valid - DONE
2. request input - DONE
3. sort array - DONE
4. find middle number - DONE
5. compare middle number to input - DONE switch case starting line 62
6. if middle number < input, get last half - DONE - switch case line 69
7. if middle num < input, get last half - DONE - switch case line 71
8. find middle num of first/last half - DONE - recursively with switch case until num is found
9. compare, create new array, loop - DONE - no longer creating new array thanks to solution mentioned above; recursively eval original array in switch case lines 69-72

<!-- ## Site
![](/images/read_me_images/Screen%20Shot%202017-03-10%20at%203.28.51%20PM.png "Home page")

### Landing Page
Here a User is invited to login or register as a new User.

![](/images/read_me_images/Screen%20Shot%202017-03-10%20at%203.28.56%20PM.png "Login")

### Team Selection Page
Upon login, the User's previously selected squad is shown. Here they may edit Team Name and Gameweek information as well as add or remove players from their lineup.

![](/images/read_me_images/Screen%20Shot%202017-03-10%20at%203.29.42%20PM.png "Login")

## Built with

- [Angular](https://www.w3schools.com/angular/angular_intro.asp) - Angular is a Javascript framework offering two way data binding and sepaaration of concerns using factories and controllers.
- [Google Chart API](https://developers.google.com/chart/interactive/docs/quick_start) - Free , Rich Gallery , Customizable and Cross-browser compatible.
- [Bootstrap](http://getbootstrap.com/) - Extensive list of components and  Bundled Javascript plugins.

## Todo
- Add multiple gameweek stats from which to choose.
- Add team logos.
- Mobile version. -->

### Author [Mark Ellis ](https://github.com/markellisdev)

#### References Used
* [Initial article to refresh myself on what binary search is](https://careerkarma.com/blog/binary-search-javascript/)
* [Refresh my memory on how to write to HTML](https://www.w3schools.com/js/js_output.asp)
* [Sort Array](https://raddevon.com/articles/sort-array-numbers-javascript/)
* [Mozilla JS Reference pages](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* [Switch cases over if-else](https://stackoverflow.com/a/44633141/6615341)

##### Not used but perhaps should
* [Test whether input is actually in array before any other code runs](https://stackoverflow.com/questions/6356122/javascript-if-in-x) This would be more efficient

