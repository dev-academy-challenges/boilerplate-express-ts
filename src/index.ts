import { log } from 'console'
import express from 'express'

const app = express()

app.get('/', (_, response: express.Response) => {
  response.send('Hello world!')
})

const PORT = 3000
app.listen(PORT, () => {
  log('listening on port ', PORT)
})
