const router = require('express').Router();

const userRoutes = require('./user-routes');
const rosterRoutes = require('./rosterRoutes');

router.use('/users', userRoutes);
router.use('/roster', rosterRoutes);

module.exports = router;
