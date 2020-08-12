const express = require("express");
const path = require("path");
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

//ROUTING

//handle get request and send products
app.get("/products", (req, res) => {
  getProducts((err, data) => {
    if (err) {
      console.log("problem getting tasks from server");
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

//handle get request from the client
// app.get("/reviews", (req, res) => {
//   getReviews((err, data) => {
//     if (err) {
//       console.log("problem getting tasks from server");
//       res.sendStatus(500);
//     } else {
//       res.send(data);
//     }
//   });
// });

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
app.post("/addReview", (req, res) => {
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
