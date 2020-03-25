const { getAsync, setAsync } = require('./redisConfig');

const RedisController = {};

RedisController.getDestinationsFromCache = async (position) => {
  const cashedDestinations = await getAsync(position);
  console.log('Fetching position data from redis');
  if (cashedDestinations === null) {
    console.log('No data found.');
    return null;
  }
  console.log('Successfully fetched data.');
  return JSON.parse(cashedDestinations);
};


RedisController.storePositionData = async (position, destinations) => {
  setAsync(position, JSON.stringify(destinations), 'ex', 600);
  console.log('saving position data to redis');
};

module.exports = RedisController;
