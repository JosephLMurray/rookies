const router = require('express').Router();

const withAuth = require('../../utils/auth');
const { Roster } = require('../../models');

router.post('/', withAuth, async (req, res) => {
  try {
    const newRoster = await Roster.create({
      ...req.body,
      userID: req.session.user_id
    });

    res.status(200).json(newRoster);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const rosterData = await Roster.destroy({
      where: {
        rosterID: req.params.id,
        userID: req.session.user_id
      }
    });

    if (!rosterData) {
      res.status(404).json({ message: 'No roster found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Roster deleted succesfully.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
