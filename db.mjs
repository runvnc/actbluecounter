import pgp_ from 'pg-promise'
const pgp = pgp_()

const cn = { host: 'localhost', port: 5432, database: 'act',
    user: 'actblue', password: 'yanggang' }

const db = pgp(cn)

const cleancontrib = (data) => {
  console.log({data})
  let record = {}
  let text = 'firstname,lastname,city,state,zip,uniqueIdentifier'
  text = text.split(',')
  for (let field of text) {
    if (data[field])
      record[field] = data[field].substring(1,30)
  }
  let other = ['amount','createdAt']
  for (let field of other)
    record[field] = data[field]
   	
  return record
}

const addcontrib = async (data) => {
  let record = cleancontrib(data)
  let {firstname, lastname, uniqueIdentifier,amount,createdAt} = record
  let recurringPeriod = 1, recurringDuration = 0, status = 1
	console.log({createdAt})
  await db.any(`insert into contributions
	        (firstname, lastname, uniqueIdentifier,
	        amount,createdat,recurringPeriod,recurringDuration,status)
	        values ($1,$2,$3,$4,$5,$6,$7,$8)`, [firstname, lastname,
	        uniqueIdentifier, amount,createdAt,
		recurringPeriod,recurringDuration,status])
}

const totaldonated = async () => {
  let res = await db.any(`select sum(amount) from contributions`)
  return res[0].sum+""
}

export {totaldonated,addcontrib}
