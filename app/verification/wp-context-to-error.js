function convertWpContextToError(context) {
  // stub
  return Object.assign(context[context.length - 1], { message: JSON.stringify(context[context.length - 1]) })
  throw new Error('Not implemented')
}

module.exports = convertWpContextToError
