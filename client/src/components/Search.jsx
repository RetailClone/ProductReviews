import React,  { useState, useEffect }  from 'react';
import RadialBarChart from './RadialBarChart.jsx';

function Search(props) {
  const [input, setInput] = useState(0);
  const [showReview, setReview] = useState(false)
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      {/* ------- */}
      <button  onClick={() => {props.getReview(input); props.getProducts(input); props.getId(input); setReview(true)}}>Submit</button>
      {/* {showReview ? <RadialBarChart /> : null } */}
    </div>
  )
}

export default Search;