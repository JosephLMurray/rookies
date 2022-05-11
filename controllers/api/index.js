const router = require('express').Router();

const userRoutes = require('./user-routes');
const rosterRoutes = require('./rosterRoutes');
const playersRoutes = require('./players-route');

router.use('/users', userRoutes);
router.use('/roster', rosterRoutes);
router.use('/players', playersRoutes);
module.exports = router;
