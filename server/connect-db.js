require("dotenv").config();
const { default: mongoose } = require("mongoose");

module.exports = async function ConnectDB() {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(process.env.DB_URL, connectionParams).then(() => console.log('Connected to DB!'));
    } catch (err) {
        console.log('Failed to connect!');
    }
}