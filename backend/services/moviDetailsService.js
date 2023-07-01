const moviDetailsModel = require('../model/moviDetailsModel');

module.exports = {
    addDetails : async(data)=>{
        const dbResponse = await moviDetailsModel.create(data);
        return dbResponse;
    },
    getDetails : async(con) => {
        const dbResponse = await  moviDetailsModel.findOne(con);
        return dbResponse;
    }
}