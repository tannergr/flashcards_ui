import React, {Component, Fragment} from 'react';
import ActionButton from '../Shared/ActionButton';
import DeckPreview from '../Shared/DeckPreview';
import layers from '../Icons/layers.png'
import pen from '../Icons/fountain-pen-head-2.png';
import target from '../Icons/target.png';
import wand from '../Icons/magic-wand.png';

export default class Home extends Component {

  render(){
    return(
      <div>
        {this.props.currentDeck &&
          <Fragment>
            <DeckPreview deck={this.props.currentDeck} />
            <ActionButton 
              title="Start" 
              heavy 
              icon={wand}
              onClick={this.props.startPlaying}
            />
          </Fragment>
        }
        <ActionButton 
          title="Switch Deck" 
          icon={layers} 
          onClick={this.props.selectDeck}
        />
        <ActionButton
          title="New Deck" 
          icon={pen}
          onClick={this.props.newDeck}
        />
      </div>  
    )
  }
}
