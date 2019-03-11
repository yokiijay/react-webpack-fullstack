const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const ReactSSR = require('react-dom/server')
const serverEnry = require('../dist/server-entry').default

app.get('*', (req, res)=>{
  const appString = ReactSSR.renderToString(serverEnry)
  console.log(appString)
  res.send(appString)
})

app.listen(PORT,()=>{
  console.log('server running at '+PORT)
})
