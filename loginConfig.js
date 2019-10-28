const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function PassportCheck(passport, getUserByEmail, getUserById) {
	const userAuth = async (email, password, done) => {
		const user = getUserByEmail(email)
		if (user == null) {
			return done(null, false, {
				message: 'No user with that email'
			})
		}
		const check = await bcrypt.compare(password, user.password);
		try {

			if (check) {
				return done(null, user)
			} else {
				return done(null, false, {
					message: 'Password incorrect'
				})
			}
		} catch (e) {
			return done(e)
		}
	}

	passport.use(new LocalStrategy({
		usernameField: 'email'
	}, userAuth))
	passport.serializeUser((user, done) => done(null, user.id))
	passport.deserializeUser((id, done) => {
		return done(null, getUserById(id))
	})
}






module.exports = PassportCheck