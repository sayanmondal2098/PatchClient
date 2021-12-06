require('dotenv').config();
const express = require('express');
const app = express();

const LinuxOSDetails = require('./api/routs/Linux/OSDetails');
const RunLinuxOSCommand = require('./api/routs/Linux/RunCommand');


const Client = require('./model/Client'); 
const promisifyClient = new Client(); 

app.use('/linuxOSDetails', LinuxOSDetails);
app.use('/RunLinuxOSCommand', RunLinuxOSCommand);

app.get('/restart', function (req, res, next) {
   process.exit(1);
 });
 
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

app.listen(1235);


module.exports = app;