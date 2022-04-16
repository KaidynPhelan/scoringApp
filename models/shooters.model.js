const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shooterSchema = new Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    grade: {type: String, required: true},
    homeClub: {type: String, required: true},
});

const Shooter = mongoose.model('Shooter', shooterSchema);
module.exports = Shooter;
