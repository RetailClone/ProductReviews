const express = require('express');
const path = require('path');
const {getTitle} = require('../database/query')

const app = express();
const port = 8080;

//connect to the client
app.use(express.static(path.join(__dirname,'../client/dist')))
app.use(express.json())

//create `/reviews` route
app.get('/rev', (req, res) => {
  getTitle((err, data) => {
    if (err) {
      console.log('problem getting tasks from server');
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

//listen to port
app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`)
});