const counter = require('./producer')

counter.inc()
counter.inc()
counter.inc()

console.log(counter.getCount())