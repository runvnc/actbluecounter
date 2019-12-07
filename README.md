# actbluecounter
ActBlue contributions counter/ticker

This is a webhook endpoint for https://secure.actblue.com/docs/webhooks
It will add contributions to a Postgres database.

Endpoint is http://ipaddr:3000/donation

Basic auth currently hardcoded to 'acthook:yanggang2020'

It also has a handy endpoint (no auth) to get the total donations so far:
http://ipaddr:4000/total


Written for Node.js 13 (although its not hard to adapt to another recent version).

Needs Postgres.  See pginit.sql

For help with setting this up, email runvnc@gmail.com.  I can also transfer a snapshot directly to another Digital Ocean user so no setup is necessary (if its for the Yang campaign).


