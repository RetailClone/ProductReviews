const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '5754',
  database: 'product_reviews'
})

connection.connect((err) => {
  if(err) {
    console.log('Error connecting to the database')
  } else {
    console.log('Connected to the database')
  }
})

const getTitle = (callback) => {
  connection.query('SELECT * FROM reviews', (err, data) => {
    if (err) {
      console.log('problem getting all tasks in query');
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};
module.exports = {getTitle};