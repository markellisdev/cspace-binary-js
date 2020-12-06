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
* [Sort Array](https://raddevon.com/articles/sort-array-numbers-javascript/)
* [Mozilla JS Reference pages](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* [Switch cases over if-else](https://stackoverflow.com/a/44633141/6615341)

