const mongoose = require('mongoose');
const {Schema} = mongoose;

const movieList = new Schema({
    name        : {
        type    : String,
        require : true
    }
});

module.exports = mongoose.model('movieList', movieList);