var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

module.exports = function(passport) {
  // =========================================================================
  // passport session setup
  // =========================================================================

  // tags the user as logged in or logged out

  passport.serializeUser(function(user, done) {
    done(null, user.uuid);
  });

  passport.deserializeUser(function(uuid, done) {
    db.user.findById(uuid).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

  // =========================================================================
  // LOCAL SIGNUP
  // =========================================================================

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "account_key",
        passReqToCallback: true
      },
      function(req, email, account_key, done) {
        process.nextTick(function() {
          // does the user already exist?

          db.user
            .findOne({
              where: {
                email: email
              }
            })
            .then(function(user, err) {
              if (err) {
                console.log("err", err);
                return done(err);
              }

              // is that email already taken?
              if (user) {
                console.log("signupMessage", "That email is already taken.");
                return done(
                  null,
                  false,
                  req.flash("signupMessage", "That email is already taken.")
                );
              } else {
                // if not make a new user
                db.user
                  .create({
                    name: req.body.name,
                    email: req.body.email,
                    account_key: db.user.generateHash(account_key)
                  })
                  .then(function(dbUser) {
                    return done(null, dbUser);
                  })
                  .catch(function(err) {
                    // handle error;
                    console.log(err);
                  });
              }
            });
        });
      }
    )
  );

  // =========================================================================
  // LOCAL LOGIN
  // =========================================================================

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "account_key",
        passReqToCallback: true
      },
      function(req, email, account_key, done) {
        // does this user already exist?
        console.log("passport login hit");
        db.user
          .findOne({
            where: {
              email: req.body.email
            }
          })
          .then(function(user, err) {
            if (err) {
              throw err;
            }

            if (!user) {
              console.log("no user found");
              return done(
                null,
                false,
                req.flash("loginMessage", "No user found.")
              );
            }

            // if the user exists but fails password
            if (user && !user.validPassword(req.body.account_key)) {
              return done(
                null,
                false,
                req.flash("loginMessage", "Oops! Wrong password.")
              );
            }

            // all is well, return successful user

            return done(null, user);

            // all is well, return successful user
          });
      }
    )
  );
};
