const express = require('express');
const router = express();

const os = require('os');


const Client = require('../../../model/Client');
const promisifyClient = new Client();    


router.get('/oscpus', (req, res) => {
    res.json(os.cpus());
    console.log(os.cpus());
});

router.get('/freemem', (req, res) => {
    res.json(os.freemem());
    console.log(os.freemem());
});

router.get('/homedir', (req, res) => {
    res.json(os.homedir());
    console.log(os.homedir());
});

router.get('/loadavg', (req, res) => {
    res.json(os.loadavg());
    console.log(os.loadavg());
});

router.get('/networkinterfaces', (req, res) => {
    res.json(os.networkInterfaces());
    console.log(os.networkInterfaces());
});


router.get('/sysDetails', (req, res) => {
    res.status(200).json({ 
        "OS Platform" : os.platform(),
        "OS Release" : os.release(),
        "OS Version" : os.version(),
        "OS Type" : os.type(),
        "OS Architecture" : os.arch(),
        "OS Hostname" : os.hostname(),
        "OS Uptime" : os.uptime(),
        "OS Total Memory" : os.totalmem(),
        "OS Free Memory" : os.freemem(),
        "OS CPU Count" : os.cpus().length,
        "OS CPU Model" : os.cpus()[0].model,
        "OS CPU Speed" : os.cpus()[0].speed,
        "OS CPU Cores" : os.cpus()[0].cores,
        "OS CPU Load Average" : os.loadavg(),
        "OS CPU Total Memory" : os.totalmem(),
        "OS CPU Free Memory" : os.freemem(),
        "OS CPU Free Memory" : os.freemem(), 
        "OS Temp dir" : os.tmpdir()
    }); 
    console.log("os sysDetails called");
});

router.get('/userInfo', (req, res) => {
    res.json(os.userInfo());
    console.log(os.userInfo());
});


router.get('/hostname', (req, res) => {
    promisifyClient.sendMessage(os.userInfo().username)  
    console.log(os.networkInterfaces())
.catch((err) => console.error(err)); 
});

module.exports = router;