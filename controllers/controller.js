let collection = require('../models/flowers')

const postFlower = (req, res) => {
    let flower = req.body
    collection.postFlower(flower, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'post flower success' });
        }
    });
}

const getAllFlowers = (req, res) => {
    collection.getAllFlowers((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'get flower success' });
        }
    });
}

module.exports = {postFlower, getAllFlowers}