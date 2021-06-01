const compression = require('compression');
const express = require('express')
const morgan = require('morgan')
const prop = require('./middleware/redis-middleware.js')
const bodyParser = require('body-parser')
const route = require('./routes/route1.js')

let app = express()

app.use(compression())
app.use(express.json({
    limit: '500mb'
}))
app.use(bodyParser.json({
    limit: '500mb'
}));
app.use(bodyParser.urlencoded({
    limit: '500mb',
    'extended': true
}));
app.use('/', route)

app.listen(8002)
console.log("App listening at port 8002")