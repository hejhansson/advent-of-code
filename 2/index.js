const fs = require('fs')

let data
let checksum = 0

fs.readFile('data.txt', (error, data) => {
  data = data.toString().split('\n')
  
  data.forEach((row) => {
    
    let splitRow = row.split('')
    let letters = []

    splitRow.forEach((letter) => {   
      letters.push(letter)
    })

    letters.sort()
    
    letters.forEach((sortedLetter, index) => {
      if(sortedLetter == letters[index - 1]) checksum++  
    })

  })

  console.log(checksum)

})

