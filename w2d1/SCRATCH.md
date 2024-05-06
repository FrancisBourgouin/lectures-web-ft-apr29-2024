# TDD ?

Test Driven Development!

Write the code, figure out requirements, write some tests!

Figure out requirements, write some tests, write the code!
Figure out requirements, write some code, some test, then some more code, and more test...

```jsx
const count = function (arr) {
  let buffer = 0;
  for (let i = 0; i < arr.length; i++) {
    buffer++;
  }
  return buffer;
};
```

- How many elements are there in an array (.length() method)
- The input will always be an array 

```jsx
  const count = function(arr){
    return arr.length
  }
```

The joys of automated testing!

Manual testing is very repetitive, inconsistent
Augments confidence in the function
Will provide a tech spec of what the function can do


Unit Testing!

Feature, Integration, End-to-End