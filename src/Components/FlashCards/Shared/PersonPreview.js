import React, {Fragment} from 'react';
import './DeckPreview.css';

export default (props) => {
  if(!props.person.member) return <Fragment />
  if(props.person.member.name == "Former member") return <Fragment />
  if(!props.person.member.photo) return <Fragment />
  let selectedClass = !props.person.selected?"deckPreview":"deckPreview selected"
  console.log(selectedClass)
  return(
    <div className={selectedClass} onClick={props.click}>
      
      <div className="deckImage">
        <img src={props.person.member.photo.highres_link} />
      </div>
      <div className="deckDetails">
        <p><b>{props.person.member.name}</b></p>
        <p>RSVP: {props.person.rsvp.response}</p>
      </div>
    </div>
  )
}