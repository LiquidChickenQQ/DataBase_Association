const router = require('express').Router();
const Team = require('../models').sequelize.model('team');
​
router.get('/', async (req, res) => {
  return res.send(await Team.findAll());
})
​
router.post('/', async (req, res) => {
  return res.send(await Team.create(req.body));
})
​
router.get('/:teamid/players', async (req, res) => {
  const team = await Team.findOne({where:{id: req.params.teamid}})
  return res.send(await team.getPlayers());
})
router.get('/:id', async (req, res) => {
  return res.send(await Team.findOne({where:{id: req.params.id}}));
})
​
router.patch('/:id', async (req, res) => {
  return res.send(await Team.update({where:{id: req.params.id}}));
})
​
router.delete('/:id', async (req, res) => {
  return res.send(await Team.delete({where:{id: req.params.id}}));
})
​
module.exports = router;