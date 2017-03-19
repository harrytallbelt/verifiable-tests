function convertWpContextToError(context) {
  // stub
  return Object.assign(context[0], { message: 'ERROR!' })
  throw new Error('Not implemented')
}

module.exports = convertWpContextToError
