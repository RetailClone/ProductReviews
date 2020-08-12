import React,  { useState, useEffect }  from 'react';

function Search(props) {
  const [input, setInput] = useState(0);
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      <button  onClick={() => {props.getReview(input);  props.getId(input)}}>Submit</button>
    </div>
  )
}

export default Search;