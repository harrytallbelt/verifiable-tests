const { exec } = require('child_process')
const os = require('os')

function prove(predicates) {
  return new Promise((resolve, reject) => {
    const simplify = getSimplifyExecutableName()
    exec(`echo '${predicates}' | ${simplify} -nosc`, (err, stdout, stderr) => {
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

let simplifyExecutableName = null
function getSimplifyExecutableName() {  
  if (!simplifyExecutableName) {
    switch (os.type()) {
      case 'Windows_NT':
        simplifyExecutableName = 'bin/simplify.windows.exe'
        break
      case 'Linux':
        simplifyExecutableName = 'bin/simplify.linux'
        break
      case 'Darwin':
        simplifyExecutableName = 'bin/simplify.osx'
        break
      default:
        throw new Error('Unsupported type of OS.')
    }
  }
  return simplifyExecutableName
}

module.exports = prove

// For testing purposes
if (!module.parent) {
  prove(process.argv[2])
    .then(console.log)
    .catch(console.log)
}
