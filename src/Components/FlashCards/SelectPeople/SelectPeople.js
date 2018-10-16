import React, {Component, Fragment} from 'react';
import PersonPreview from '../Shared/PersonPreview';
import './SelectPeople.css';

export default class SelectPeople extends Component {

  render(){
    return(
      <Fragment>
          {this.props.people.map((person)=>{
            return(
              <PersonPreview
                person={person}
                click={()=>{this.props.selectPerson(person.index)}}
                key={person.index}
              />
            )
          })}
        <div style={{height: "75px"}} />
        <div className="allDoneBar">
          <div className="doneButton" onClick={this.props.back}>
            Back
          </div>
          <div className="doneButton" onClick={this.props.done}>
            Done
          </div>
        </div>
      </Fragment>
    )
  }
}