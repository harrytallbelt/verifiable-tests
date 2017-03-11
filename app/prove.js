const { exec } = require('child_process')

function prove(predicates) {
  return new Promise((resolve, reject) => {
    exec(`echo "${predicates}" | bin/simplify.exe -nosc`, (err, stdout, stderr) => {
      if (err) {
        reject(err)
      } else {
        const res = stdout
          .split('\n')
          .filter(s => s.match(/.*(Valid\.|Invalid\.)/))
          .map(s => s.endsWith('Valid.'))
        resolve(res)
      }
    })
  })
}

module.exports = prove

// For testing purposes
if (!module.parent) {
  prove(process.argv[2])
    .then(console.log)
    .catch(console.log)
}
