const mqtt = require('mqtt');
var server = mqtt.connect(process.env.MQTT_URL);

client.on('connect', function () {
    setInterval(function () {
        var random = Math.floor(Math.random() * 100);
        console.log(random);
        if (random > 50) {
            client.publish( process.env.MQTT_SUBJECT , 'Hello World!');
        }
            
    }, 10000);
});