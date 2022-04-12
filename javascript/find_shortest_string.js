function findShortestString(arr) {
  // find the shortest string in an array
  // find the minimum length of the entire array
  // return the first string that is the minimum
  let lengthOfStrings = []
  for (let i of arr) {
    lengthOfStrings.push(i.length)
  }
  for (let i of arr) {
    if (Math.min(...lengthOfStrings) === i.length) {
      return i
    }
  }
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
