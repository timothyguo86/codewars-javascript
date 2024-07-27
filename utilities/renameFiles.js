/**
 * Renames all files in a directory by replacing underscores with spaces in their filenames.
 * @param {string} directoryPath - The path to the directory containing the files.
 */
const fs = require('fs')
const path = require('path')

function renameFiles(directoryPath) {
  // Read the list of files in the directory
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err)
      return
    }

    // Iterate through each file
    files.forEach(filename => {
      console.log(filename)
      const oldFilePath = path.join(directoryPath, filename)

      // Replace underscores in the filename
      const newFilename = filename.replace(/_/g, ' ')

      const newFilePath = path.join(directoryPath, newFilename)

      // Rename the file
      fs.rename(oldFilePath, newFilePath, err => {
        if (err) {
          console.error(`Error renaming file ${filename}:`, err)
        } else {
          console.log(`Renamed: ${filename} to ${newFilename}`)
        }
      })
    })
  })
}

const directoryPath = './'

renameFiles(directoryPath)
