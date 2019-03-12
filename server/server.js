const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const ReactSSR = require('react-dom/server')
const serverEntry = require('../dist/server-entry').default
const fs = require('fs')
const path = require('path')

const template = fs.readFileSync(path.join(__dirname,'../dist/index.html'), 'utf8')

app.use('/public', express.static(path.join(__dirname, '../dist')))

app.get('*', (req, res)=>{
  const appString = ReactSSR.renderToString(serverEntry)
  res.send(template.replace('<app></app>', appString))
})

app.listen(PORT,()=>{
  console.log('server running at '+PORT)
})
