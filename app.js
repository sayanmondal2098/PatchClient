const express = require('express');
const app = express();

const LinuxOSDetails = require('./api/routs/Linux/OSDetails');



app.use('/linuxOSDetails', LinuxOSDetails);
app.use((req, res, next) => {
   res.status(200).json({ 
       "message" : "It works!"

   }); 
});



module.exports = app;