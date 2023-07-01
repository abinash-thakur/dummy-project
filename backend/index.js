require('dotenv').config();
const express       = require('express');
const  app          = express();
const Port          = process.env.PORT || 3002;
const cors          = require('cors');
const connectToDB   = require('./db');
const listRouter    = require('./router/listRouter');
const detailsRouter = require('./router/detailsRouter');

connectToDB();

app.use(express.json());
app.use(cors());

app.use('/api', listRouter);
app.use('/api/details', detailsRouter)

app.listen(Port, ()=>{
    console.log(`Your app is listen successfuly in port ${Port}`);
})