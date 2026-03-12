const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Welcome to check my Render-hosted Express-page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})