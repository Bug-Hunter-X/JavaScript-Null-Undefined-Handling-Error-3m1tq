# JavaScript Null/Undefined Handling

This repository demonstrates a common error in JavaScript where null or undefined values are not properly handled, leading to unexpected behavior or runtime errors. The `bug.js` file contains the erroneous code, and `bugSolution.js` provides a corrected version.

**Problem:**
Many JavaScript functions don't explicitly check for null or undefined input values. When these values are passed unexpectedly, it can cause errors such as `TypeError: Cannot read properties of null (reading 'property')` or lead to incorrect calculations.

**Solution:**
It's good practice to include checks at the beginning of functions to handle null or undefined values explicitly.  This prevents unexpected errors and makes the code more robust.