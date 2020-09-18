let router = require('express').Router();
let controller = require('../controller/controller');

router.get('/', controller.renderIndex);

module.exports = router;
