const express = require('express')
const fs = require('fs')
const Keyv = require('keyv')
const path = require('path')

// Checks if config file exists - if it doesn't, the sample is copied
//   and the program is exited. If the copy fails, the user is given a
//   link to the github page where they can download the default config.
if (!fs.existsSync(path.join(__dirname, 'config.js'))) {
  console.error('Config file not found, one will be generated.')
  try {
    fs.copyFileSync(path.join(__dirname, 'config.sample.js'), path.join(__dirname, 'config.js'))
    console.log('Config file created. Exiting...')
  } catch {
    console.error('Failed to create default config. Please grab one from github - https://github.com/owenflaherty/node-load-balancer')
  }
  process.exit(2)
}

const config = require('./config.js')

const server = express()
const keyv = new Keyv()

const mwProfiler = (q, s, n) => {
  /* */
}

const handler = (q, s, n) => {
  /* */
}

server.use(mwProfiler)

// All the methods!
server.get('*', handler)
server.post('*', handler)
server.head('*', handler)
server.put('*', handler)
server.delete('*', handler)
server.connect('*', handler)
server.options('*', handler)
server.trace('*', handler)
server.patch('*', handler)

server.listen(config.listen.port, () => {
  console.log(`Listening on port ${config.listen.port}. Use C-c to exit`)
})
