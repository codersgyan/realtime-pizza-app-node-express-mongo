var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/user");

function init(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL,
      },
      function(accessToken, refreshToken, profile, done) {
        const newUser = getInfo(profile);
        User.findOne({ email: newUser.email })
          .then(async (user) => {
            if (!user) {
              const user = new User({ ...newUser });
              try {
                await user.save();
                done(null, user);
              } catch (e) {
                req.flash("error", "Something went wrong");
                return res.redirect("/register");
              }
            } else {
              done(null, user);
            }
          })
          .catch((err) => {
            done(err, null);
          });
      }
    )
  );
}

function getInfo(profile) {
  return {
    name: profile?.displayName || "user",
    email: profile.emails[0].value,
  };
}

module.exports = init;
