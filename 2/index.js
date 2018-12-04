const fs = require('fs')
const _ = require('underscore')

const partOne = () => {
  let checksum = 0

  fs.readFile('data.txt', (error, data) => {
    let d = data.toString().split('\n')

    let sumTwo = 0
    let sumThree = 0

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
        if(counts[element] == 2) countTwo = 1
        if(counts[element] == 3) countThree = 1
      }

      if(countTwo == 1) sumTwo++
      if(countThree == 1) sumThree++

      console.log(`row #${index}:`, countTwo, countThree)

    })

    console.log(sumTwo*sumThree)
  })
}

//partOne()

// hitta de ID som bara är skiljer med en char

const partTwo = () => {
  const getDiff = (string, diffBy) => string.split(diffBy).join('')

  fs.readFile('data.txt', (error, data) => {
    let d = data.toString().split('\n')

    // each row from input
    d.forEach((row, index) => {

      // current row we're on as array of letters
      const currentRow = row.split('')

      // loop over each of the rows and check against currentRow
      d.forEach((row, index) => {

        // current row in loop as letters
        let rowToTestAgainst = row.split('')
        let notMatching = 0
        let currentRowToPrint = null

        // main row
        currentRow.forEach((letter, index) => {

          if(rowToTestAgainst.indexOf(letter) > -1) {
            //console.log('test', letter);
          } else {
            //console.log('not', letter);
            notMatching++
          }
          
        })    
        if(notMatching == 1) {
          console.log('one', row);
        }
        //console.log(notMatching);

      })


    })
  })
}

partTwo()

