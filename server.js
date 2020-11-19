const express = require('express');
const redis = require('redis');
const app = express();
const redisClient = redis.createClient();

const KarfkaProducer = require('./KafkaProducer.js');

const producer = new KarfkaProducer('myTopic');

producer.connect(() => console.log('Connected to Kafka'));

app.get('/longTask', (req, res) => {
  // Heavy task

  // Quick return and defer work
  console.log('Message recieved');
  redisClient.publish('myChannel', 'Do some work');
  producer.send('Do Long Task');
  res.send('Done');
});

app.listen(4000);