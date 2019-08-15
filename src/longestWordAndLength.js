const longestWordAndLength = ( phrase ) => {
  // Return a value if valid phrase is provided
  let longestWordAndLengthReturnValue
  // Split the phrase by space
  const phraseArray = phrase.split(' ')
  // Sort the array of words by length
  const orderedArray = phraseArray.sort((a, b) => {
    // Return a greater than b
    return a.length < b.length
  })
  // Return word and length
  longestWordAndLengthReturnValue = [ orderedArray[0], orderedArray[0].length ]
  // Return the modified variable
  return longestWordAndLengthReturnValue
}

module.exports = longestWordAndLength
