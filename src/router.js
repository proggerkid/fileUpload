let router = require('express').Router();
let controller = require('../controller/controller');

router.get('/', controller.renderIndex);
router.post('/file', controller.uploadFile);


module.exports = router;
