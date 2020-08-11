const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if(err) {
    console.log('Error connecting to the database')
  } else {
    console.log('Connected to the database')
  }
})

const getReviews = (callback) => {
  connection.query('SELECT * FROM reviews', (err, data) => {
    if (err) {
      console.log('problem getting all reviews in query');
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const postReview = (review1, review2, review3, review4, callback) => {
  connection.query(`INSERT INTO reviews (customer_name, review_title, review, rating) VALUES ('${review1}','${review2}','${review3}', '${review4}')`, (err, data) => {
    if (err) {
      console.log('problem posting reviews in query');
      callback(err, null);
      } else {
          callback(null, data);
        }
      })
    };

module.exports = {getReviews, postReview};