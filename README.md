# actbluecounter
ActBlue contributions counter/ticker

This is a webhook endpoint for https://secure.actblue.com/docs/webhooks
It will add contributions to a Postgres database.

Endpoint is http://ipaddr:3000/donation

Basic auth currently hardcoded to 'acthook:yanggang2020'

It also has a handy endpoint (no auth) to get the total donations so far:
http://ipaddr:4000/total


Written for Node.js 13.

Needs Postgres.  See pginit.sql


