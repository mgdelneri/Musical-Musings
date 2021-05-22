const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const mainPageRoutes = require('./mainPage-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const exchangesRoutes = require('./exchange-routes');

router.use('/', mainPageRoutes);
router.use('/home', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/exchanges', exchangesRoutes)

module.exports = router;
