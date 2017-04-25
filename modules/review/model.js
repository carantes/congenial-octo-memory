var db = require('../../config/db');

var schema = new db.mongoose.Schema({
    username: String,
    repo: Number,
    stars: Number,
    review: String,
    date: { type: Date, default: Date.now }
},{collection: 'review'});

module.exports = db.mongoose.model('Review', schema);
