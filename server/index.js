const express = require('express')
const app = express()
const fetch = require('node-fetch')

const port = 3000

app.get('/', (req, res) => {
  res.json({
      true: true
  })
})

app.get('/data', async (req, res) => {
    const rs = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await rs.json()
    res.json(data)
})
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;