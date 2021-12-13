function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i]+array[j]
      if (sum === target) {
        return true
      }
    }
  }
  return false
}

/* 
  O(n²)
*/

/* 
  iterate through array and take one number
    iterate through the rest of the array and take another number
  add those two numbers together to get the sum number
    compare the sum number to the target number
  if the sum and target match return true
  else continue iterating and pick a different number until a match is found
    and if none are found return false
*/

/*
  Iterates through an array and takes any two numbers, and then adds them together. Then that number is matched with a target integer, and returns true if they match. Otherwise it will continue iterating through the whole array, and if none match, returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
