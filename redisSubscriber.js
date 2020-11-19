const redis = require('redis');
const redisClient = redis.createClient();

redisClient.on('message', (channel, message) => {
  console.log('Message recieved on channel ' + channel + ' : ' + message);
  setTimeout(() => {
    // Send and forget, if subscriber is down, it wont guarantuee it gets done
    console.log('Heavy task complete')
  }, 3000);
})

redisClient.subscribe('myChannel1');
redisClient.subscribe('myChannel2');