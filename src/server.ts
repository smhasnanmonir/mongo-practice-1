import app from './app'
import config from './app/config'

const mongoose = require('mongoose')

const port = 5000

async function main() {
  try {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (err) {
    console.log(err)
  }
}

main()
