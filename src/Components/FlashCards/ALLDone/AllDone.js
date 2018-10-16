import React, {Component} from 'react';
import DeckPreview from '../Shared/DeckPreview';
import ActionButton from '../Shared/ActionButton';
import target from '../Icons/target.png';
import wand from '../Icons/magic-wand.png';

import './AllDone.css';

export default class AllDone extends Component {

  render(){
    return(
      <div>
      <DeckPreview deck={this.props.currentDeck}/>
        <h1 className="header"> You Scored: </h1>
        <div className="score">
          {this.props.score.score/(this.props.score.index+1)*100}%
        </div>
        <div>
          <ActionButton 
            title="Exit" 
            icon={target} 
            onClick={this.props.goHome}
          />
          <ActionButton 
            title="Play Again" 
            icon={wand} 
            onClick={this.props.playAgain}
          />
        </div>
      </div>
    )
  }
}