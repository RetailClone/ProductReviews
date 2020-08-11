import React from 'react';
import axios from "axios";
import StarRatingComponent from 'react-star-rating-component';
import ReviewList from './components/ReviewList.jsx';
import Form from './components/Form.jsx'
import x from './styles/styles.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewTitle: [],
      showForm: false
    }
    this.getReview = this.getReview.bind(this);
  }



componentDidMount() {
  this.getReview();
}

getReview(){
  axios.get('/rev')
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
    <div>
      <h2 >Guest Ratings &amp; Reviews</h2>

      <div>
        <button onClick={this.handleClick.bind(this)}>Write a review</button>
        {this.state.showForm ? <Form showForm={this.state.showForm} /> : null}
      </div>
      <div>
      <ReviewList reviewTitle={this.state.reviewTitle}/>
      </div>

    </div>
  )
}
}


export default App;