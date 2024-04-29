var exports = require('express');

let router = exports.Router();
let controller = require('../controllers/controller');

router.post('/', (req, res) => {
    controller.postFlower(req, res);
});

router.get('/', (req, res) => {
    controller.getAllFlowers(req, res);
});

module.exports = router;