const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

//connect to the client
app.use(express.static(path.join(__dirname,'../client/dist')))

app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`)
});