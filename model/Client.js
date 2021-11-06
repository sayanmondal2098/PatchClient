const net = require('net');
const PORT = process.env.PORT;
const HOST = process.env.HOST;
class Client {
    constructor(port, address) {
        this.socket = new net.Socket();
        this.address = address || HOST;
        this.port = port || PORT;
        this.init();
    }
    init() {
        var client = this;
        client.socket.connect(client.port, client.address, () => {
            console.log(`Client connected to: ${client.address} : ${client.port}`);
        });
        client.socket.on('close', () => {
            console.log('Client closed');
        });
    };

    sendMessage(message) {
        var client = this;
        return new Promise((resolve, reject) => {
            client.socket.write(message);
            client.socket.on('data', (data) => {
                resolve(data);
                if (data.toString().endsWith('exit')) {
                    client.socket.destroy();
                }
            });
            client.socket.on('error', (err) => {
                reject(err);
            });
        });
    }
}

module.exports = Client;