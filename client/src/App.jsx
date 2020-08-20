import React from 'react';
import axios from "axios";
import ReviewList from './components/ReviewList.jsx';
import ReviewButton from './components/ReviewButton.jsx';
import DisplayProgressBar from './components/DisplayProogressBar.jsx';
import RatingSummary from './components/RatingSummay.jsx';
import CircleProgress from './components/CircleProgress.jsx';
import SortingReviews from './components/SortingReviews.jsx';
import './styles/styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      products: [],
      customerName: '',
      title: '',
      review: '',
      rating: 0,
      item_id: window.product_id || 1 ,
      percentage: 80,
    }
    //binding functions
    this.getProducts = this.getProducts.bind(this);
    this.getReview = this.getReview.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.sortDate = this.sortDate.bind(this);
    this.sortRatings = this.sortRatings.bind(this);
  }

  componentDidMount() {
    this.getReview();
    this.getProducts();
  }

  sortRatings() {
    const {reviews} = this.state;
    let newRating = reviews.reverse();
    this.setState ({
      reviews: newRating.sort((a,b) => a.rating > b.rating)
    });
  }

  sortDate() {
    const {reviews} = this.state;
    let newReviews = reviews.reverse();
    this.setState ({
      reviews: newReviews.sort((a,b) => a.date > b.date)
    });
  }

  //function for star review component
  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  changeHandler(e) {
    this.setState ({
      //set each state to current target value
      [e.target.name]: e.target.value
    });
  }

  //Axios request to get the products from the server
  getProducts(item_id = this.state.item_id) {
    axios.get(`http://${window.location.hostname}:8080/products/${item_id}`)
    .then((res) => {
      console.log('from axios get request: ', res);
      this.setState({
        products: res.data
      });
    })
    .catch((err) => {
      console.log('Error getitng the data from client', err)
    })
  }

  //Axios request to get the reviews from the server
  getReview(item_id = this.state.item_id) {
    axios.get(`http://${window.location.hostname}:8080/reviews/${item_id}`)
    .then((res) => {
      console.log('from axios get request: ', res);
      this.setState({
        reviews: res.data
      });
    })
    .catch((err) => {
      console.log('Error getitng the data', err)
    })
  }

  submitHandler(e) {
    e.preventDefault()
    console.log(this.state)
    axios.post(`http://${window.location.hostname}:8080/add-review`, {
      customer_name:  this.state.customerName,
      review_title: this.state.title,
      review:  this.state.review,
      rating: this.state.rating,
      item_id: this.state.item_id
    })
    .then( () => this.getReview(this.state.item_id))
    .then(res => {
      console.log(res)
      this.setState({
        customerName: '',
        title: '',
        review: '',
        rating: 0,
        item_id: 0
      });
    })
    .catch(err => {
      console.log('Error posting reviews in Client', err)
    })
  }

  render() {
    console.log("This is the product id from window", this.state.item_id)
    console.log("This is reviews", this.state.reviews);
    console.log("This is products", this.state.products);
    return(
     <div className="container">
      <div>
        <h2 className="heading">Guest Ratings &amp; Reviews</h2>
      </div>
      <div className="header-stats-container">
        <DisplayProgressBar percentage={this.state.products} />
        <RatingSummary percentage={this.state.products} />
        <CircleProgress />
      </div>
      <div className="review">
        <ReviewButton
        getReview={this.getReview}
        customerName={this.state.customerName}
        title={this.state.title}
        review={this.state.review}
        rating={this.state.rating}
        onStarClick={this.onStarClick}
        changeHandler={this.changeHandler}
        submitHandler={this.submitHandler}
        />
      </div>
      <SortingReviews sortDate={this.sortDate} sortRatings={this.sortRatings} />
      <div className='total-reviews'>
        {this.state.products.map((item, idx) => (
          <div key={idx}>
            We found {item.total_reviews} matching reviews
          </div>
        ))}
      </div>
      <ReviewList reviews={this.state.reviews} />
    </div>
    );
  }
}

export default App;
