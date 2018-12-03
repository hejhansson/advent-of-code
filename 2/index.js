const fs = require('fs')
const _ = require('underscore')

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

    let counts = {}
    
    letters.forEach(function(element) {
      counts[element] = (counts[element] || 0) + 1;
    })
    
    for (var element in counts) {
      console.log(element + ' = ' + counts[element]);
    }
    


    console.log('row')

  })
})

