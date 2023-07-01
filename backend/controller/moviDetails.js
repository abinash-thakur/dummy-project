const detailsServices = require('../services/moviDetailsService');

module.exports = {
    addDetails : async(req, res)=>{
        try{
            const data = {
                moviId      : req.body.moviId,
                moviName    : req.body.moviName,
                Actor       : req.body.actor,
                Director    : req.body.director,
                Writer      : req.body.writer
            }
            const response = await detailsServices.addDetails(data);
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
    getDetails : async(req, res) => {
        try{
            const con = {moviId : req.query.moviId};
            const response = await detailsServices.getDetails(con);
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