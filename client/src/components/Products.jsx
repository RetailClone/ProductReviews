
import React from 'react';

function Products(props) {
  return(
    <div>
      <ul>
        {props.products.map( (item, idx) => (
          <li onClick={() => props.getReview(item.item_id)} key={idx}>
            {item.item_name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products;