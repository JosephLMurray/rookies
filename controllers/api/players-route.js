const router = require('express').Router();
const { Player, User } = require('../../models')

// router.get('/', (req, res) => {
//   Player.findAll({})
//   .then(data => res.json(data))
// })





router.get('/users:PlayerID', async (req, res) => {
  try {
    const playerData = await Player.findAll({ where: { userId: req.params.PlayerID}});
  const players = playerData.map(play => play.get({
    plain: true
  }));
    res.render('dashboard', {players});
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/', async (req, res) => {
  try { 
    const playerData = await Player.findAll({});
      const players = playerData.map(play => play.get({plain: true}));
      res.render('dashboard', {players});
  } catch (err) {
    res.status(400).json(err);
  }
})




















module.exports = router;