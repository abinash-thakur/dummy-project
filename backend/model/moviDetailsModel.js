const mongoose = require('mongoose');
const {Schema} = mongoose;

const moviDetails = new Schema({
    moviId      : {
        type    : mongoose.Types.ObjectId,
        require : true
    },
    moviName    : {
        type    : String,
        require : true
    },
    Actor       : {
        type    : String,
        require : true
    },
    Director    : {
        type    : String,
        require : true
    },
    Writer      : {
        type    : String,
        require : true
    }
});

module.exports = mongoose.model('moviDetails', moviDetails);