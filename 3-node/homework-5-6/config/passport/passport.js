const passport = require('passport');
const UserModel = require('../../models/userModel');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SIGN_KEY || 'secret';

passport.use('local', new LocalStrategy({usernameField: 'email'}, function (email, password, cb) {
	UserModel.findOne({email: email}, function (err, user) {
		if (err) {
			return cb(err);
		}
		if (!user) {
			return cb(null, false, {message: 'Неверный логин'});
		}
		if (!user.comparePassword(password)) {
			return cb(null, false, {message: 'Неверный пароль'});
		}
		return cb(null, user);
	});
}));


passport.use('jwt', new JwtStrategy(opts, function (jwt_payload, cb) {
	UserModel.findById(jwt_payload.id, function (err, user) {
		if (err) {
			return cb(err);
		}
		if (!user) {
			return cb(null, false, {message: 'Неверный токен'});
		}
		return cb(null, user);
	});
}));

module.exports = passport;