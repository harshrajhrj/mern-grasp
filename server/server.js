require("dotenv").config();
require('./connect-db')();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./routes/auth");
const expressSession = require("express-session");
const mongoSession = require('connect-mongo');
require("./passport");
const app = express();

app.use(
	expressSession({
		secret: 'test user session',
		cookie: {
			maxAge: 10000
		},
		saveUninitialized: false,
		name: 'test-session',
		resave: false,

		// using MongoDB based session storage
		store: mongoSession.create({
			mongoUrl: process.env.DB_URL,
			autoRemove: 'interval',
			autoRemoveInterval: 10,
		})
	})
);
// expired sessions aren't deleted

app.use(passport.authenticate('session'));
app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use("/auth", authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenting on port ${port}...`));
