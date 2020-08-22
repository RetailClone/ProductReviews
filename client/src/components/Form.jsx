import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import StarRatings from 'react-star-ratings';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("this is form", this.props)
    return (
      <div className="form-container">
      <form onSubmit={this.props.submitHandler}>
          <div>
          <StarRatings
          rating={this.props.rating}
          numberOfStars={5}
          name='rating'
          starDimension="20px"
          starSpacing="0px"
          changeRating={this.props.onStarClick}
          starRatedColor= "rgb(255, 180, 0)"
          starHoverColor= "rgb(255, 180, 0)"
          style = {{borderColor: "rgb(202, 134, 0)", border: "5px"} }
          />
        </div>
        <div className="review-content">
        <div className="review-heading">
          <h3>Write your review</h3>
        </div>
        <div className="review-textare">
          <textarea
          rows='5'
          cols='50'
          placeholder='Review'
          name='review'
          value={this.props.review}
          onChange={this.props.changeHandler}
          ></textarea>
        </div>
        <div className="review-title">
          <input
          name='title'
          placeholder='Review title (optional)'
          value={this.props.title}
          onChange={this.props.changeHandler}>
          </input>
        </div>
        <div className='review-customer-name'>
          <input
          name='customerName'
          placeholder='Display name'
          value={this.props.customerName}
          onChange={this.props.changeHandler}
          ></input>
        </div>
        {/* <div>
          <h3>
            Tell us more (optional)
          </h3>
          <div>
            <div>
              quality
            </div>
            <div>
              <StarRatings
              rating={this.props.quality}
              numberOfStars={5}
              name='quality'
              starDimension="20px"
              starSpacing="0px"
              changeRating={this.props.onStarClick}
              starRatedColor= "rgb(255, 180, 0)"
              starHoverColor= "rgb(255, 180, 0)"
              style = {{borderColor: "rgb(202, 134, 0)", border: "5px"} }
              />
            </div>
          </div>
          <div>
            <div>
              value
            </div>
            <div>
              <StarRatings
              rating={this.props.value}
              numberOfStars={5}
              name='value'
              starDimension="20px"
              starSpacing="0px"
              changeRating={this.props.onStarClick}
              starRatedColor= "rgb(255, 180, 0)"
              starHoverColor= "rgb(255, 180, 0)"
              style = {{borderColor: "rgb(202, 134, 0)", border: "5px"} }
              />
            </div>
          </div>
          <div className="review-radio-btn">
              <h3>
                Would you recommend this item? (optional)
              </h3>

             <div>
             <label className="review-radio">
               <input type="radio" name="radio2" className="RadioInput-sc-3atojb-0 fPGfkw" value="yes"></input>
                   <div data-test="radioComponentLabel">Yes</div>
                   <div className="h-text-grayDark">
                     </div>
                     </label>
                <label className="review-radio">
                <input type="radio" name="radio2" className="RadioInput-sc-3atojb-0 fPGfkw" value="no"></input>
                   <div data-test="radioComponentLabel">No</div>
                   <div className="h-text-grayDark">
                     </div>
                     </label>
             </div>

          </div> */}
        {/* </div> */}
        <div className="cancel-submit-button">
          <span>
            {/* Click handler to close the form when cancel is clicked */}
            <button onClick={() => this.props.onClick(false)}>Cancel</button>
          </span>
          <button  type="submit">Submit review</button>
        </div>
      </div>
      </form>
      </div>
    )
  }

}

export default Form;