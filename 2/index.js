const fs = require('fs')
const _ = require('underscore')

let checksum = 0

fs.readFile('data.txt', (error, data) => {
  let d = data.toString().split('\n')
  
  // each row from input
  d.forEach((row, index) => {
    
    let splitRow = row.split('')
    let letters = []
  
    // push each letter to array
    splitRow.forEach((letter) => {   
      letters.push(letter)
    })

    let counts = {}
    
    // check for duplicates per row
    letters.forEach(function(element) {
      counts[element] = (counts[element] || 0) + 1;
    })

    let countTwo = 0
    let countThree = 0
    
    for (var element in counts) {
      //console.log(element + ' = ' + counts[element]);
      if(counts[element] == 2) countTwo++
      if(counts[element] == 3) countThree++        
    }    
    
    // how many times there's twos och threes on each row
    console.log(`row ${index}`, countTwo, countThree)

  })
})

