const connectToMongoo = require('./db');

connectToMongoo();
const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello piyush')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})