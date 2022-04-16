const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const compSchema = new Schema({
    club: {type: String, required: true},
    type: {type: String, required: true},
    targets: {type: Number, required: true},
    status: {type: String, required: true},
    shooters: {type: [mongoose.Types.ObjectId], ref: "Shooter", required: true},
    scores: {type: [[Number]], required: false},
});

const Comp = mongoose.model('Comp' , compSchema);
module.exports = Comp;
