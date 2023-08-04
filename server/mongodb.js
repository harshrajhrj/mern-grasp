require('dotenv').config();
const mongoose = require('mongoose');

module.exports = async function () {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(process.env.DB_URL, connectionParams).then(() => console.log('Connected to DB'));
    } catch (err) {
        console.log(err.message);
    }
}