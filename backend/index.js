const connectToMongoo = require('./db');

var cors  = require('cors');
connectToMongoo();
const express = require('express')
const app = express()
const port = 5000

app.use(cors());
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello piyush')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})