import express from 'express'
import {addcontrib,totaldonated} from './db.mjs'
import pq from 'p-queue'
const PQueue = pq.default
import basicAuth from 'express-basic-auth'

const queue = new PQueue({concurrency:1})

let count = 0

queue.on('active', () => {
  console.log(`Item #${++count}  Pending: ${queue.pending}`)
})

let app = express()
app.use(express.json())

app.use(basicAuth({users:{acthook:'yanggang2020'},
	           challenge: true}))

app.post('/donation', async (req, res) => {
  console.log(req.body)
  try {
    let {firstname,lastname,city,state,zip,email,phone} = req.body.donor
    let {status,createdAt,uniqueIdentifier} = req.body.contribution
    let amount = 0
    for (let line of req.body.lineitems) amount += line.amount
    
    if (status != 'declined') {	
      await queue.add(() => addcontrib({firstname,lastname,city,state,zip,
                                     createdAt,amount,uniqueIdentifier}))
      res.send('ok')
    } else {
      res.send(req.body)
    }
  } catch (e) {
    console.error(e)
    res.status(500)
    res.end('error')
  }
})

app.listen(3000)

let app2 = express()

app2.get('/total', async (req, res) => {
  res.send(await totaldonated())
})

app2.listen(4000)

