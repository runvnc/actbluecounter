const pgp = require('pg-promise')()

const cn = { host: 'localhost', port: 5432, database: 'act',
    user: 'actblue', password: 'yanggang' }

const db = pgp(cn)

cleancontrib = (data) => {
  let record = {}
  let text = {firstname, lastname, city, state, zip,
	      uniqueIdentifier};
  for (let field in text)
    record[field] = data[field].substring(1,30)
  let other = {amount}
  for (let field in other)
    record[field] = data[field];
   	
  return record;
}


export async addcontrib (data) => {
  let record = cleancontrib(data)
  let {firstname, lastname, uniqueIdentifer,amount} = record
  await db.any(`insert into contributions
	        firstname, lastname, uniqueIdentifer,
	        amount`, firstname, lastname,
	        uniqueIdentifier, amount)
}

