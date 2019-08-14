const phrases = require('./phrases.conf')
const longestWordAndLength = require('./src/longestWordAndLength')

for (let i = 0; i < phrases.length; i += 1) {
  console.log( longestWordAndLength( phrases[i] ) )
}
