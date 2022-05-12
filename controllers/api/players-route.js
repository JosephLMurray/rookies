const router = require('express').Router();
const { Player, User } = require('../../models')

router.get('/', (req, res) => {
  Player.findAll({})
  .then(data => res.json(data))
})


module.exports = router;