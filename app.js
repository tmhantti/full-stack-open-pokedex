const express = require('express')
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000
// eslint-disable-next-line no-undef
// const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.listen(PORT, () => {
// app.listen(PORT, '0.0.0.0', () => {
  // console.log('server started on port 5000')
  console.log(`server started on port ${PORT}`)
})