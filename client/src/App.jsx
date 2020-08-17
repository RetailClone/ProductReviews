import React from 'react';
import axios from "axios";
import ReviewList from './components/ReviewList.jsx';
import ReviewButton from './components/ReviewButton.jsx';
import Search from './components/Search.jsx'
import DisplayProgressBar from './components/DisplayProogressBar.jsx'
import RatingSummary from './components/RatingSummay.jsx'
import CircleProgress from './components/CircleProgress.jsx'
import SortingReviews from './components/SortingReviews.jsx';
import './styles/styles.css'

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
      item_id: 0,
      percentage: 80,
    }
    //binding functions
    this.getProducts = this.getProducts.bind(this);
    this.getReview = this.getReview.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.onStarClick = this.onStarClick.bind(this)
    this.getId = this.getId.bind(this);
  }

  componentDidMount() {
    this.getReview();
    this.getProducts();
  }

  getId(id) {
    this.setState({
      item_id: id
    })
  }

  //function for star review component
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  changeHandler(e) {
    this.setState({
      //set each state to current target value
      [e.target.name]: e.target.value
    })
  }

  getProducts(){
    axios.get('http://localhost:8080/products')
    .then((res) => {
      console.log('from axios get request: ', res);
      this.setState({
        products: res.data
      });
    })
    .catch((err) => {
      console.log('Error getitng the data', err)
    })
  }

  getReview(item_id){
    axios.get(`http://localhost:8080/reviews/${item_id}`)
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
    axios.post('http://localhost:8080/add-review', {
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
    console.log("This is reviews",this.state.reviews);
    console.log("This is products",this.state.products)
    return(
     <div className="container">

      <div>
        <Search getReview={this.getReview} getId={this.getId}/>
      </div>

       {/* <div>
         <Products products={this.state.products} getReview={this.getReview}/>
       </div> */}

      <div>
        <h2 className="heading" >Guest Ratings &amp; Reviews</h2>
      </div>

      <div className="header-stats-container">
        <DisplayProgressBar percentage={this.state.percentage}/>
        <RatingSummary />
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

      <SortingReviews />

      <div>
        <ReviewList reviews={this.state.reviews}/>
      </div>

    </div>
    );
  }
}

export default App;
