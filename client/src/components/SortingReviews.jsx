import React from 'react';

function SortingReviews(props) {
  return (
    <div className="sorting-reviews">
       <div className="sort-by-date">
          <select className="dropdown" onChange={() => {props.sortDate()}}>
            <option className="options">
              most recent
            </option>
            <option>
              highest rated
            </option>
            <option>
              lowest rated
            </option>
            <option>
              most helpful
            </option>
          </select>
       </div>

       <div className="sort-by-date">
       <select className="dropdown">
            <option className="options">
              5 stars
            </option>
            <option>
              4 stars
            </option>
            <option>
              3 stars
            </option>
            <option>
              2 stars
            </option>
            <option>
              1 stars
            </option>
          </select>
       </div>
       <div className="sort-by-photos">
         <div className="checkbox-display">
          <input type="checkbox" id="fruit1" name="fruit-1" value="Apple"></input>
          <label htmlFor="fruit1">With photos</label>

          <input type="checkbox" id="fruit2" name="fruit-2" value="Apple2"></input>
          <label htmlFor="fruit2">Verified purchases</label>
         </div>

       </div>
      </div>
  )
}

export default SortingReviews;