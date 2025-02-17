function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Or throw an error, or return a default value - handle as appropiate
  }

  // ... rest of the function
}