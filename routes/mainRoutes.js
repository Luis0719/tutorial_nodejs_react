

module.exports = (app) => {
    app.get(
        '/',
        (req, res) => {
            if( req.user ){
                res.send(req.user);
            }else{
                res.send({user: 'null'});
            }
            
        }
    )

    require('./authRoutes')(app);
}