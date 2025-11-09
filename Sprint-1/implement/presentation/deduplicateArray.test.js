const deduplicateArray = require("./deduplicateArray.js");
/*
deduplicateArray Array

📖 deduplicateArray means **deduplicateArray**

In this kata, you will need to deduplicateArray the elements of an array

E.g. deduplicateArray(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. deduplicateArray([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. deduplicateArray([1, 2, 1]) target output: [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the deduplicateArray function
// Then it should return an empty array
// test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the deduplicateArray function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the deduplicateArray function
// Then it should remove the duplicate values, preserving the first occurence of each element

describe("deduplicateArray - valid inputs", () => {
  [{ input: [], expected: [] }].forEach(({ input, expected }) =>
    test(`returns an empty array for input [${input}]`, () =>
      expect(deduplicateArray(input)).toEqual(expected))
  );

  [
    { input: [1, 2, 3], expected: [1, 2, 3] },
    { input: ["a", "b", "car"], expected: ["a", "b", "car"] },
    { input: [0, 1, 5, 6], expected: [0, 1, 5, 6] },
  ].forEach(({ input, expected }) =>
    test(`returns a copy of the array when no duplicates exist for input [${input}]`, () =>
      expect(deduplicateArray(input)).toEqual(expected))
  );

  [
    { input: [5, 1, 1, 2, 3, 2, 5, 8], expected: [5, 1, 2, 3, 8] },
    { input: [1, 1, 1, 1], expected: [1] },
    { input: ["a", "a", "a", "b", "b", "c"], expected: ["a", "b", "c"] },
  ].forEach(({ input, expected }) =>
    test(`removes duplicate elements and keep the first occurrence for [${input}]`, () =>
      expect(deduplicateArray(input)).toEqual(expected))
  );

  [
    { input: ["1", 1, "1", 1], expected: ["1", 1] },
    { input: [2, "3", "hello", 5, 5], expected: [2, "3", "hello", 5] },
  ].forEach(({ input, expected }) =>
    test(`removes duplicates from an array of numbers and strings, keeping the first occurrence of each element, for the input [${input}]`, () =>
      expect(deduplicateArray(input)).toEqual(expected))
  );

  [
    { input: [1, 2, true, 3, null, "a", {}], expected: [1, 2, 3, "a"] },
    { input: ["x", undefined, "x", "y", []], expected: ["x", "y"] },
    { input: [false, 5, 5, "hello", () => {}, 5], expected: [5, "hello"] },
    { input: [1, NaN, 2, NaN, "hello"], expected: [1, 2, "hello"] },
  ].forEach(({ input, expected }) =>
    test(`Ensures deduplicateArray filters out invalid elements, removes duplicates, and returns a copy of the array`, () =>
      expect(deduplicateArray(input)).toEqual(expected))
  );
});

describe("deduplicateArray - invalid inputs", () => {
  const invalidInputs = [null, undefined, 123, "string", {}, () => {}];

  invalidInputs.forEach((input) =>
    test(`throws typeError when input is ${String(input)}`, () => {
      expect(() => deduplicateArray(null)).toThrow(TypeError);
      expect(() => deduplicateArray(null)).toThrow("Input must be an array");
    })
  );
});
