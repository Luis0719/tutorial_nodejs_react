const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => done(null, user));
});

// https://console.developers.google.com/ to get credentials
passport.use(
    new googleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {      
        User.findOne({ googleID: profile.id }).then((existingUser) => {
            if(existingUser) {
                console.log("User already exists");
                done(null, existingUser); //Tell passport that we've finished with the auth process
            }else{
                //User doesn't exists
                console.log("Creating new user: " + profile.displayName);
                
                new User({
                    userID: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value
                })
                .save()
                .then((user) => done(null, user));
            }
        });
    })
);