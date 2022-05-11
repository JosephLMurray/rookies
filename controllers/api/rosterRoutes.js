const router = require('express').Router();

const withAuth = require('../../utils/auth');
const { Roster } = require('../../models');

router.post('/', withAuth, async (req, res) => {
  try {
    const newRoster = await Roster.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newRoster);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;