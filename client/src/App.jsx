import React from 'react';
import axios from "axios";
import ReviewList from './components/ReviewList.jsx';
import Form from './components/Form.jsx'
import './styles/styles.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewTitle: [],
      showForm: false
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
        reviewTitle: res.data
      });
    })
    .catch((err) => {
      console.log('Error getitng the data', err)
    })
  }

  handleClick() {
    this.setState({
      showForm: true
    })
  }

  render() {
    console.log("This is reviews",this.state.reviewTitle)
    return(
     <div className="container">
      <div>
        <h2 className="heading" >Guest Ratings &amp; Reviews</h2>
      </div>
      <div className="review">
        <button className="reviewBtn" onClick={this.handleClick.bind(this)}>Write a review</button>
        {this.state.showForm ? <Form showForm={this.state.showForm} /> : null}
      </div>
      <div>
        <ReviewList reviewTitle={this.state.reviewTitle}/>
      </div>
    </div>
    );
  }
}

export default App;