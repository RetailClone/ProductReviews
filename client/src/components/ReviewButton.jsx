import React, { useState } from 'react';
import Form from './Form.jsx'
import '../styles/styles.css'

function ReviewButton(props) {
  const [showForm, setForm] = useState(false);
  return(
    <div>
      <button className="reviewBtn" onClick={() => setForm(true)}>
        Write a review
      </button>
      {showForm ? <Form getReview={props.getReview} onClick={bool => setForm(bool)}/> : null}
    </div>
  )
}

export default ReviewButton;