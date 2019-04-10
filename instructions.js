'use strict'

const path = require('path')

module.exports = async (cli) => {
  try {
    const inFile = path.join(__dirname, './config', 'bitly.js')
    const outFile = path.join(cli.helpers.configPath(), 'bitly.js')
    await cli.copy(inFile, outFile)

    cli.command.completed('create', 'config/bitly.js')
  } catch (error) {
    
  }
}
