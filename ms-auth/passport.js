const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const User = require('./models/users');
module.exports = function(passport){
  passport.use(new LocalStrategy({
          usernameField: 'email',
          passwordField: 'password'
      }, (email, password, cb) => {
          //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
          return User.findOne({email, password})
            .then(user => {
                if (!user) {
                    return cb(null, false, {message: 'Incorrect email or password.'});
                }
                return cb(null, user, {message: 'Logged In Successfully'});
            })
            .catch(err => cb(err));
      }
  ));

  passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : process.env.JWT_SECRET
    },
     (jwtPayload, cb) => {
        //find the user in db.
        return User.findOne({ _id:jwtPayload._id})
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));
}