// ### Flattening
//
// Use the existing Array \`reduce\` method in combination with the \`concat\` method to “flatten”an array of arrays into a single array that has all the elements of the original arrays.
// You must name the function "flatten".

// e.g.
//
// ```
// let a = [[1,2],[3,4],[5,6,7]];
// ```
//
// ```
// flatten(a);
// ```
//
// ```
// // result is:
// ```
//
// ```
// // [1,2,3,4,5,6,7]
// ```
//
// Bonus: make it work even with a nested array like:
//
// ```
// let nested = [[1,2],[3, [4, 5]], [6], 7]
// ```
//
// ```
// flatten(nested);
// ```
//
// ```
// // [1,2,3,4,5,6,7]
// ```

// let a = [[1,2],[3,4],[5,6,7]];

let flatten = array => array.reduce(function(total, elem) {
    return total.concat(elem);
  });

// trial line (1):
// console.log(flatten([[1,9],[3,8]])); // gets [ 1, 9, 3, 8 ]

// trial line (2):
// let a = [[1,2],[3,4],[5,6,7]];
// console.log(flatten(a)); // gets [ 1, 2, 3, 4, 5, 6, 7 ]

module.exports = flatten;
