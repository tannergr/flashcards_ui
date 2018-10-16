import React, {Component} from 'react';
import ActionButton from '../Shared/ActionButton';
import target from '../Icons/target.png';
import wand from '../Icons/magic-wand.png';
import pen from '../Icons/fountain-pen-head-2.png';

import './SaveDeck.css';

export default class AllDone extends Component {
  handleFocus(event){
    event.target.select()
    
  }
  render(){
    return(
      <div>
        <div className="deckForm">
          <h2>Deck Name:</h2>
          <input 
            className="input"
            value={this.props.deckName}
            onChange={this.props.changeName}
            onFocus={this.handleFocus}
          />
        </div>
        <div>
          <ActionButton 
            title="Save Deck" 
            icon={pen} 
            onClick={this.props.save}
          />
          <ActionButton 
            title="Cancel" 
            icon={wand} 
            onClick={this.props.cancel}
          />
          <ActionButton 
            title="Back" 
            icon={target} 
            onClick={this.props.back}
          />
        </div>
      </div>
    )
  }
}