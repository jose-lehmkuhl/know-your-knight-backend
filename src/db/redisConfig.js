const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient({
  host: 'localhost',
  port: 6379,
});

module.exports.setAsync = promisify(client.set).bind(client);
module.exports.getAsync = promisify(client.get).bind(client);
module.exports.quit = client.quit.bind(client);
