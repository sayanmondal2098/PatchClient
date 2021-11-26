require('dotenv').config();
const express = require('express');
const app = express();

const LinuxOSDetails = require('./api/routs/Linux/OSDetails');
const RunLinuxOSCommand = require('./api/routs/Linux/RunCommand');


const Client = require('./model/Client'); 
const promisifyClient = new Client(); 

app.use('/linuxOSDetails', LinuxOSDetails);
app.use('/RunLinuxOSCommand', RunLinuxOSCommand);

app.use((req, res, next) => {
   res.status(200).json({ 
    "message": "It works!",
    "App Name": app.name,
    "App Host-Port": req.get('host'),
    "App Mode": req.get('env'),
    "App URL": req.protocol + '://' + req.get('host') + req.originalUrl,
    "App Method": req.method,
    "App Path": req.path,
    "App Query": req.query,
    "App Body": req.body
   }); 
});



module.exports = app;