const KafkaConsumer = require('./KafkaConsumer');

const consumer = new KafkaConsumer(['myTopic']);

consumer.on('message', (message) => {
  console.log('Message recieved on Kafka');
  setTimeout (() => {
    console.log('Long task complete');
  }, 3000);
});

consumer.connect();