const express = require('express');
const router = express();

const os = require('os');

// Get OS Details
// @route   GET /api/routs/Linux/OSDetails

const Client = require('../../../model/Client');
const promisifyClient = new Client();


router.get('/oscpus', (req, res) => {
    res.json(os.cpus());
    console.log(os.cpus());
    promisifyClient.sendMessage(os.cpus().toString());
});

router.get('/freemem', (req, res) => {
    res.json(os.freemem());
    console.log(os.freemem());
    promisifyClient.sendMessage(os.freemem().toString());
});

router.get('/homedir', (req, res) => {
    res.json(os.homedir());
    console.log(os.homedir());
    promisifyClient.sendMessage(os.homedir().toString());
});

router.get('/loadavg', (req, res) => {
    res.json(os.loadavg());
    console.log(os.loadavg());
    promisifyClient.sendMessage(os.loadavg().toString());
});

router.get('/networkinterfaces', (req, res) => {
    res.json(os.networkInterfaces());
    console.log(os.networkInterfaces());
    promisifyClient.sendMessage(os.networkInterfaces().toString());
});


router.get('/sysDetails', (req, res) => {
    res.status(200).json({
        "OS Platform": os.platform(),
        "OS Release": os.release(),
        "OS Version": os.version(),
        "OS Type": os.type(),
        "OS Architecture": os.arch(),
        "OS Hostname": os.hostname(),
        "OS Uptime": os.uptime(),
        "OS Total Memory": os.totalmem(),
        "OS Free Memory": os.freemem(),
        "OS CPU Count": os.cpus().length,
        "OS CPU Model": os.cpus()[0].model,
        "OS CPU Speed": os.cpus()[0].speed,
        "OS CPU Cores": os.cpus()[0].cores,
        "OS CPU Load Average": os.loadavg(),
        "OS CPU Total Memory": os.totalmem(),
        "OS CPU Free Memory": os.freemem(),
        "OS CPU Free Memory": os.freemem(),
        "OS Temp dir": os.tmpdir()
    });
    console.log("os sysDetails called");
});

router.get('/userInfo', (req, res) => {
    res.json(os.userInfo());
    console.log(os.userInfo());
    promisifyClient.sendMessage(os.userInfo().toString());
});


router.get('/hostname', (req, res) => {
    res.json(os.hostname());
    console.log(os.hostname());
    promisifyClient.sendMessage(os.hostname().toString());

});

module.exports = router;