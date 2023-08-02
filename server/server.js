require('./mongodb')();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,PUT,POST,DELETE',
    credentials: true
}));

// client http://localhost:8080/api/student POST
// "/"
app.use('/', require('./routes/CRUD_API'));

app.listen(8080, () => console.log('Listening on port 8080'));