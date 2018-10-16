import React, {Component, Fragment} from 'react';
import DeckPreview from '../Shared/DeckPreview';
import './SelectDeck.css';

export default class SelectDeck extends Component {

  render(){
    return(
      <Fragment>
        {this.props.decks.map((deck)=>{
          return(
            <DeckPreview
              deck={deck}
              click={()=>{this.props.changeDecks(deck)}}
              key={Math.random()*1000000}
            />
          )
        })}
      </Fragment>
    )
  }
}