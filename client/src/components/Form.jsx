import React from 'react';
// import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';

class Form extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   customerName: '',
    //   title: '',
    //   review: '',
    //   rating: 0
    // }
    // this.changeHandler = this.changeHandler.bind(this);
    // this.submitHandler = this.submitHandler.bind(this);
   }

  //function for star review component
  // onStarClick(nextValue, prevValue, name) {
  //   this.setState({rating: nextValue});
  // }

  // changeHandler(e) {
  //   this.setState({
  //     //set each state to current target value
  //     [e.target.name]: e.target.value
  //   })
  // }

  // submitHandler(e) {
  //   e.preventDefault()
  //   console.log(this.state)
  //   axios.post('/addReview', {
  //     customer_name:  this.state.customerName,
  //     review_title: this.state.title,
  //     review:  this.state.review,
  //     rating: this.state.rating
  //   })
  //   .then(res => {
  //     console.log(res)
  //     this.setState({
  //       customerName: '',
  //       title: '',
  //       review: '',
  //       rating: 0
  //     });
  //   })
  //   .catch(err => {
  //     console.log('Error posting reviews in Client', err)
  //   })
  // }

  render() {
    //destructure
    // const { customerName, title, review, rating} = this.state;
    console.log("this is form", this.props)
    return (
      <form onSubmit={this.props.submitHandler}>
        <div>
          <div>
            <input
            name='title'
            placeholder='Review title (optional)'
            value={this.props.title}
            onChange={this.props.changeHandler}>
            </input>
          </div>
          <div>
            <StarRatingComponent
              name="rating"
              starCount={5}
              value={this.props.rating}
              onStarClick={this.props.onStarClick}
            />
          </div>
          <div>
            <input
            name='customerName'
            placeholder='Display name'
            value={this.props.customerName}
            onChange={this.props.changeHandler}
            ></input>
          </div>
          <div>
            <textarea
            rows='5'
            cols='50'
            placeholder='Review'
            name='review'
            value={this.props.review}
            onChange={this.props.changeHandler}
            ></textarea>
          </div>
          <div>
            <span>
              {/* Click handler to close the form when cancel is clicked */}
              <button onClick={() => this.props.onClick(false)}>Cancel</button>
            </span>
            <button  type="submit">Submit review</button>
          </div>
        </div>
      </form>
    )
  }

}

export default Form;