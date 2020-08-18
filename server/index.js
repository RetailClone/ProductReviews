const express = require("express");
const path = require("path");
var cors = require("cors");
const {
  getReviews,
  postReview,
  getProducts,
  getReviewsByID,
} = require("../database/query");

const app = express();
const port = 8080;

//connect to the client
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(cors());

//ROUTING

//handle get request and send products
//------------------------------------------
app.get("/products/:item_id", (req, res) => {
  console.log("this is params from products", req.params);
  getProducts(req.params.item_id, (err, data) => {
    if (err) {
      console.log("problem getting tasks from server");
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get("/reviews/:item_id", (req, res) => {
  console.log(req.params);
  getReviewsByID(req.params.item_id, (err, data) => {
    if (err) {
      console.log("problem getting tasks from server");
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

//handle post request from the client
app.post("/add-review", (req, res) => {
  console.log("Sucessfully posted data", req.body);
  postReview(
    req.body.customer_name,
    req.body.review_title,
    req.body.review,
    req.body.rating,
    req.body.item_id,
    (err, data) => {
      if (err) {
        console.log("problem getting tasks from server");
        res.sendStatus(500);
      } else {
        res.send(data);
      }
    }
  );
});

//listen to port
app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
});
