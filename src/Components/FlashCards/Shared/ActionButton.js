import React, {Fragment} from 'react';
import './ActionButton.css';

export default (props) => {
  return(
    <div className="actionButton" onClick={props.onClick}>
      <img  style={{marginRight: "20px"}}src={props.icon} />
      {props.heavy?
        <b>{props.title}</b>:
        <Fragment>{props.title}</Fragment>
      }
    </div>
  )
}