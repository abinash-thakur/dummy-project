const listServices = require('../services/moviListService');

module.exports = {
    addList : async(req, res)=>{
        try{
            const data = {
                name : req.body.moviName
            }
            const response = await listServices.addList(data);
            if(!response)
                res.status(403).send({message : "Data is not inserted"});
            res.status(201).send({payload : data, message : "Data is Successfully Inserted"});
        }
        catch(error)
        {
            console.log("something went wrong");
            res.status(500).send({message : "something went wrong!!"});
        }
    },
    getList : async(req, res) => {
        try{
            console.log("getlist is fire");
            const response = await listServices.getList();
            if(!response)
                res.status(404).send({message : "Data not found"});
            res.status(200).send({payload : response, message : "Data is found successfully"});
        }
        catch(error)
        {
            console.log("something went wrong");
            res.status(500).send({message : "something went wrong!!"});
        }
    }
}