const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to the database");
  } else {
    console.log("Connected to the database");
  }
});

const getProducts = (callback) => {
  connection.query("SELECT * FROM products", (err, data) => {
    if (err) {
      console.log("problem getting all reviews in query");
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const getReviews = (callback) => {
  connection.query("SELECT * FROM reviews", (err, data) => {
    if (err) {
      console.log("problem getting all reviews in query");
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const getReviewsByID = (itemId, callback) => {
  connection.query(
    "SELECT * FROM reviews WHERE item_id=?",
    [itemId],
    (err, data) => {
      if (err) {
        console.log("problem getting all reviews in query");
        callback(err, null);
      } else {
        callback(null, data);
      }
    }
  );
};

const postReview = (review1, review2, review3, review4, review5, callback) => {
  connection.query(
    `INSERT INTO reviews (customer_name, review_title, review, rating, item_id) VALUES ('${review1}','${review2}','${review3}', '${review4}','${review5}')`,
    (err, data) => {
      if (err) {
        console.log("problem posting reviews in query");
        callback(err, null);
      } else {
        callback(null, data);
      }
    }
  );
};

module.exports = { getReviews, postReview, getProducts, getReviewsByID };
