/*
The “Basic 13”
The foundation “Basic 13” algorithm challenges.
*/

// arrays
const nums1 = [84, 12, 5, 28, 69, 30, 61, 86, 40, 14];

/**
 * 1.
 * Print 1-255 -
 * Print all the integers from 1 to 255.
 */
function print1To255() {
    for (i = 1; i <= 255; i++) {
        console.log(i)
    }
}
print1To255();

/**
 * 2.
 * Print Sum 0-255 -
 * Print integers from 0 to 255, and with each integer
 * print the sum so far.
 */
function printSum0To255() {
    let sum = 0
    for (i = 0; i <= 255; i++) {
        sum += i
        console.log("this is i", i)
        console.log("this is the sum", sum)
    }
}

printSum0To255();

/**
 * 3.
 * Find and Print Max -
 * Given an array, find and print its largest element.
 */
function printMax(arr) {
    let max = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log(max)
}

printMax(nums1);

/**
 * 4.
 * Array with Odds -
 * Create an array with all the odd integers between 1
 * and 255 (inclusive).
 */

/**
 * 5.
 * Greater Than Y
 * Given an array and a value Y, count and print the
 * number of array values greater than Y.
 */

/**
 * 6.
 * Max, Min, Average
 * Given an array, print the max, min and average values
 * for that array.
 */

/**
 * 7.
 * Swap String For Array Negative Values
 * Replace any negative array values with 'Dojo'.
 */

/**
 * 8.
 * Print Odds 1-255
 * Print all odd integers from 1 to 255.
 */

/**
 * 9.
 * Iterate and Print Array
 * Iterate through a given array, printing each value.
 */

/**
 * 10.
 * Get and Print Average
 * Analyze an array’s values and print the average.
 */

/**
 * 11.
 * Square the Values
 * Square each value in a given array, returning that same
 * array with changed values.
 */

/**
 * 12.
 * Zero Out Negative Numbers
 * Return the given array, after setting any negative values
 * to zero.
 */

/**
 * 13.
 * Shift Array Values
 * Given an array, move all values forward by one index,
 * dropping the first and leaving a '0' value at the
 * end.
 */