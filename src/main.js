// @ts-check

require('dotenv').config()

const https = require('https')
const path = require('path')
const fs = require('fs')
const { PORT } = require('./common')
const app = require('./app')

const options = {
  key: fs.readFileSync(path.join(__dirname, '/ssl/localhost-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '/ssl/localhost.pem')),
}

https.createServer(options, app).listen(PORT, () => {
  console.log(`The Express server is listening at port: ${PORT}`)
})
