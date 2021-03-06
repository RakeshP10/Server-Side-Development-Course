const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image:  {
        type: String,
        required: false
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type      : Boolean,
        default   : false,
    }
}, {
    timestamps: true
});
var Leaders = mongoose.model('leader', leaderSchema);
module.exports = Leaders;