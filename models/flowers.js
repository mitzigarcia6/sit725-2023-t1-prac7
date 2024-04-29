let client = require('../dbConnection');

let collection = client.db("Text1").collection('Flower');

function postFlower(flower, callback) {
    collection.insertOne(flower, (err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function getAllFlowers(callback) {
    collection.find({}).toArray((err, result) => {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

module.exports = {postFlower, getAllFlowers}