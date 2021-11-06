const { exec } = require("child_process");
const express = require('express');
const router = express();


// Run command on Linux machine and return the result to the user in JSON format , Have to send the response to the server
// @param: command should be added in the body of the request  <- To DO 
// @return: result of the command

router.post('/runlsla', (req, res) => {
    exec("ls -la", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }

        res.json(`${stdout}`);
        console.log(`stdout: ${stdout}`);
    });
});

module.exports = router; 
