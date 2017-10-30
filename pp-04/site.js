//  1. Correct the variable scope so that the console.log call
//  outputs the correct value for x (5) even after double(6) is
//  called:

function double(num) {

function double(num) {
  var x = num * 2;
  return x;
}

double(6);
console.log('The value of x is:', x, 'It should be 5.');

//  2. Rewrite the corrected JavaScript above as a self-executing
//  anonymous function that does not pollute the global
//  namespace (e.g., neither its variables nor the double
//  function can be accessed via the `window` global object, 	
//  like `window.x`):

console.log('Just a note: I used y as 9 instead of x as 5 for 2 so that you could check window.y');
(function() {
  var y = 9;
  function double(num) {
    var y = num * 2;
    return y;
  }
  double(6);
  console.log('The value of y is:', y, 'It should be 9.');
})();

//  3. Correct this function so that there is no i variable in
//  the global scope:

var i;
function arrayEach(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

arrayEach(['red', 'green', 'blue'], console.log);

console.log(i); // should be 'undefined', not 3

//  4. Explain why this function does not modify the global
//  variable x declared on line 5 above. Write your explanation
//  as JavaScript comments.

function addTwo(x) {
  x = x + 2;
  return x;
}

console.log(addTwo(4)); // 6
console.log(x); // should be 5 if you corrected the double() function above

// EXPLANATION HERE:
// Using x within the addTwo function doesn't modify the x defined globally in 1
// because the addTwo function defines its own locally scoped x in its function
// declaration. This locally scoped x is known as an argument. All arguments
// are scoped to their function.
