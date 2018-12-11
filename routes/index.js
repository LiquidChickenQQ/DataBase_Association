module.exports = app => {
    app.use('/api/team', require('./team'))
    app.use('/api/player', require('./player'))

    app.use('*/*', (req, res) => {
        res.send({msg:'4oh4'})
    })
}