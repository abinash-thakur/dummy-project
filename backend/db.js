const mongoose = require('mongoose');
require('dotenv').config();
const URL      = process.env.MONGO_URL; 

const connectToDB = ()=>{
    try{
        mongoose.connect(URL);
        console.log("mongodb is connected successfuly");
    }
    catch(error)
    {
        console.log("some error occured", error);
    }
};
module.exports = connectToDB;