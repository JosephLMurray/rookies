const withAuth = require('../utils/auth');
const router = require('express').Router();
const { User, Player } = require('../models');
const res = require('express/lib/response');

router.get('/', (req, res) => {
  res.render('homepage');
});


router.get('/', (req, res) => {
  try {
    res.render('homepage', {loggedIn: req.session.loggedIn});  
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/', (req, res) => {
  try {
    res.render('homepage', {logged_out: req.session.logged_out});  
  } catch (err) {
    res.status(500).json(err)
  }
});



router.get('teamSelect', withAuth, (req, res) => {
  try {
    res.render('teamSelect', {
      players: req.session.players
    });
  } catch (err) {
    res.status(500).json(err);

  }
});

router.get('/login', (req, res) => {
  try {
    if (req.session.loggedIn) {
      return;
    }
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
})


module.exports = router;
