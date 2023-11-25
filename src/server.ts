import app from './app'
import config from './app/config'

const mongoose = require('mongoose')

const port = 5000

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://commonDB:3cBnSYImThHv7Wm8@cluster0.pyqmcvy.mongodb.net/?retryWrites=true&w=majority`,
    )
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (err) {
    console.log(err)
  }
}

main()
