import React from 'react';
import './DeckPreview.css';
import picture from '../Icons/filter-picture.png';

export default (props) => {
  return(
    <div className="deckPreview" onClick={props.click}>
      <div className="deckImage">
        <img src={picture} />
      </div>
      <div className="deckDetails">
        <p><b>{props.deck.name}</b></p>
        <p>Last Score: {props.deck.lastScore}%</p>
      </div>
    </div>
  )
}