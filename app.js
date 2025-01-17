// Testing Discord webhook - part 2

const express = require('express')
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// For HTML health check (fly.io deployment)
app.get('/health', (req, res) => {
  // throw 'error...'
  // eslint-disable-next-line no-unreachable
  res.send('ok')
})

// dummy end point for checking version updates in fly.io deployment:
app.get('/version', (req, res) => {
  res.send('13') // change this string to ensure a new version deployed
})

app.listen(PORT, () => { // for GitHub
  console.log(`server started on port ${PORT}`)
})