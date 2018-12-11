const router = require('express').Router();
const Player = require('../models').sequelize.model('player');

router.get('/', async (req, res) => {
    return res.send(await Player.findAll());
})

router.post('/', async (req, res) => {
    return res.send(await Player.create(req.body));
})

router.get('/:id', async (req, res) => {
    return res.send(await Player.findOne({where:{id: req.params.id}, include: 'team'}));

})

router.patch('/:id', async (req, res) => {
    return res.send(await Player.update({where:{id: req.params.id}}));
})

router.delete('/:id', async (req, res) => {
    return res.send(await Player.delete({where:{id: req.params.id}}));
})

module.exports = router;