const app = require('./app');
const mongoose = require('mongoose');


 
require('dotenv').config({path: "variables.env"});
/*
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) =>{
    console.error("ERROR: " +error.message);
})
mongoose.set('strictQuery', false);*/

app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {
    console.log("Servidor rodando na porta: "+server.address().port);
}); 