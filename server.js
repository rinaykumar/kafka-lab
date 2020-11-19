const express = require('express');
const app = express();

app.get('/longTask', (req, res) => {
  res.send('Done');
});

app.listen(4000);