const moviListModel = require('../model/moviListModel');

module.exports = {
    addList : async(data)=>{
        const dbResponse = await moviListModel.create(data);
        return dbResponse;
    },
    getList : async() => {
        const dbResponse = await  moviListModel.find();
        return dbResponse;
    }
}