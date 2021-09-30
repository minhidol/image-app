var express = require('express');
var router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const imageRoutes = require('./uploadImage.route');

router.use(authMiddleware.isAuth);
router.use('/image', imageRoutes);

module.exports = router;
