import React from 'react';
import './DeckPreview.css';

export default (props) => {
  console.log(props)
  return(
    <div className="deckPreview" onClick={props.click}>
      <div className="deckDetails">
        <p><b>{props.event.name}</b></p>
        <p>{props.event.local_date}</p>
      </div>
    </div>
  )
}