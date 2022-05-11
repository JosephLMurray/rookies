const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// app.use("/images", express.static(path.join(__dirname, "/public/images")));

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
