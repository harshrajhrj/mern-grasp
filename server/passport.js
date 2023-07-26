const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const user = require("./models/user");

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		async function (accessToken, refreshToken, profile, callback) {
			const User = await user.findOne({ google_id: profile.id });
			if (User) {

				/**
				 * If a guest already exist, then execute callback with guest
				 */
				callback(null, User);
			} else {

				/**
				 * Create a new guest
				 */
				const NewUser = new user({
					name: profile._json.name,
					email: profile._json.email,
					google_id: profile.id,
					avatar: profile._json.picture
				});
				const SavedUser = await NewUser.save();
				callback(null, SavedUser);
			}
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	const User = await user.findOne({ _id: id });
	if (User)
		done(null, User);
});
