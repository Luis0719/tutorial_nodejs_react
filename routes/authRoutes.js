const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    app.get(
        '/auth/google/callback',
        (get, res) => {
            passport.authenticate('google');
            res.send(req.user);
        }
    );

    app.get(
        '/auth/logout',
        (req, res) => {
            req.logout();
            res.send(req.user);
        }
    )

    app.get(
        '/api/current_user',
        (req, res) => {
            res.send(req.user);
        }
    );
};