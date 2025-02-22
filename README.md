# Unexpected Concatenation in JavaScript Due to Loose Typing

This repository demonstrates a common JavaScript bug caused by the language's loose typing system.  The `foo` function is intended to add two numbers, but due to the use of different data types, JavaScript performs string concatenation instead of numerical addition.

## Bug

The `bug.js` file shows the problematic code. When we call `foo(1, '2')`, instead of getting `3`, we get `12` because JavaScript implicitly converts the number `1` to a string before concatenating it with the string `'2'.

## Solution

The `bugSolution.js` file demonstrates a solution.  Explicit type checking (using `typeof` or similar) or using `parseInt()` to ensure both inputs are numbers before performing the addition prevents the concatenation issue.