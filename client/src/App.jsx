import React from 'react';
import axios from "axios";
import ReviewList from './components/ReviewList.jsx';
// import Form from './components/Form.jsx'
import './styles/styles.css'
import RadialBarChart from './components/RadialBarChart.jsx';
import StaticRatingStars from './components/StaticRatingStars.jsx';
import ReviewButton from './components/ReviewButton.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    }
    //binding functions
    this.getReview = this.getReview.bind(this);
  }

  componentDidMount() {
    this.getReview();
  }

  getReview(){
    axios.get('/reviews')
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

  render() {
    console.log("This is reviews",this.state.reviews)
    return(
     <div className="container">
      <div>
        <h2 className="heading" >Guest Ratings &amp; Reviews</h2>
      </div>
      <div>
      <div>
      <RadialBarChart />
      </div>
      <StaticRatingStars />
      </div>
      <div className="review">
        <ReviewButton getReview={this.getReview}/>
      </div>
      <div>
        <ReviewList reviews={this.state.reviews}/>
      </div>
    </div>
    );
  }
}

export default App;