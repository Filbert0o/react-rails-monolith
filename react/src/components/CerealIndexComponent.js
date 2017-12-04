import React from 'react';
import { browserHistory, Link } from 'react-router';

const CerealIndexComponent = props =>{

  return(
    <div>
      <ul>
        <li>
          <Link to={`/cereals/${props.id}`}>{props.name}</Link>
          <br/>
          {props.description}
          <hr/>
        </li>
      </ul>
    </div>
  )
}

export default CerealIndexComponent;
