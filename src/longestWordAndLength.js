const longestWordAndLength = ( phrase ) => {
  const phraseArray = phrase.split(' ')
  const orderedArray = phraseArray.sort((a, b) => {
    return a.length < b.length
  })

  return [ orderedArray[0], orderedArray[0].length ]
}


module.exports = longestWordAndLength
