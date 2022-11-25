const express = require('express')
const app = express()

const cors = require('cors')
app.use(
	cors({
		optionsSuccessStatus: 200,
	}),
)

const requestIp = require('request-ip')

app.get('/api/whoami', (req, res) => {
	return res.send({
		ipaddress: requestIp.getClientIp(req),
		language: req.headers['accept-language'],
		software: req.headers['user-agent'],
	})
})

app.listen(3000)

module.exports = app
