const app = require('express').Router();

// client http://localhost:8080/api/student POST
// /api
app.use('/api', require('./student'));

module.exports = app;