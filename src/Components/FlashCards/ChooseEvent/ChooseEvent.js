import React, {Component, Fragment} from 'react';
import EventPreview from '../Shared/EventPreview'
import './ChooseEvent.css';

export default class ChooseEvent extends Component {

  render(){
    console.log(this.props)
    return(
      <Fragment>
        <h2 className="eventChoicePrompt">Choose an Event</h2>
        {this.props.events.map((event)=>{
          return(
            <EventPreview
              event={event}
              click={()=>{this.props.selectEvent(event)}}
              key={Math.random()*1000000}
            />
          )
        })}
      </Fragment>
    )
  }
}