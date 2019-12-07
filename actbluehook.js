import express from 'express'
import addcontrib from './db'
import PQueue from 'p-queue'

const queue = new PQueue({concurrency:1})

let count = 0

queue.on('active', () => {
  console.log(`Item #${++count}  Pending: ${queue.pending}`)
})

app = express()
app.use(express.json())

app.post('/donation', async (req, res) => {
  console.log(req.body)
  await queue.add(addcontrib(req.body))
  res.send(req.body)
})


app.listen(3000)
