let router = require('express').Router();
let controller = require('../controller/controller');

router.get('/', controller.renderIndex);
router.post('/file', controller.uploadFile);
router.get('/getFile', controller.sendFile);

module.exports = router;
