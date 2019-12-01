const passport = require('passport');
const jwt = require('jsonwebtoken')

module.exports = {
  login:(req,res,next) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: info.message,
                user   : user
            });
        }
       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }
           let userData = user.toObject();
           delete userData.password;
           // generate a signed son web token with the contents of user object and return it in the response
           const token = jwt.sign(userData, process.env.JWT_SECRET)
           return res.json({...userData, token});
        });
    })(req, res,next);
  }
}