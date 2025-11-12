function deduplicateArray(arrayInput) {
 
    // If the input is not an array, the function stops 
    // and throws an error saying “Input must be an array.”

    // If the array is empty, it returns an empty array.

    // Then, it goes through each item in the array and:

    // Ignores anything that isn’t a number or string; 
    // including NaN, null, undefined, objects, or functions.

    // Keeps only the first occurrence of each valid number or string.

    // Finally, it returns a new array that contains only unique, valid items.
}

module.exports = deduplicateArray;
