

module.exports = (app) => {
    app.get(
        '/',
        (req, res) => {
            res.send({hola: 'we'})
        }
    )

    require('./authRoutes')(app);
}