import React, { Component } from 'react';
import screens from './constants';
import AllDone from './ALLDone/AllDone';
import ChooseEvent from './ChooseEvent/ChooseEvent';
import GroupChosen from './GroupChosen/GroupChosen';
import Home from './Home/Home';
import PlayGame from './PlayGame/PlayGame';
import SelectDeck from './SelectDeck/SelectDeck';
import SelectPeople from './SelectPeople/SelectPeople';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import SaveDeck from './SaveDeck/SaveDeck';

import api from '../../api/apiCalls';

import './Flashcards.css';

export default class FlashCards extends Component {
  constructor(){
    super();
    console.log(screens)
    this.state = {
      screen: screens.HOME,
      showMenu: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.selectDeck = this.selectDeck.bind(this);
    this.changeDecks = this.changeDecks.bind(this);
    this.startGame = this.startGame.bind(this);
    this.doneGame = this.doneGame.bind(this);
    this.goHome = this.goHome.bind(this);
    this.newDeck = this.newDeck.bind(this);
    this.selectEvent = this.selectEvent.bind(this);
    this.selectPerson = this.selectPerson.bind(this);
    this.backFromSelectPeople = this.backFromSelectPeople.bind(this);
    this.doneSelecting = this.doneSelecting.bind(this);
    this.changeName = this.changeName.bind(this);
    this.backFromSaveDeck = this.backFromSaveDeck.bind(this);
    this.cancelNewDeck = this.cancelNewDeck.bind(this);
    this.saveDeck = this.saveDeck.bind(this);
  }

  async componentWillMount(){
    let lastDeck = await api.getLastDeck();
    console.log(lastDeck)
    this.setState({currentDeck: lastDeck})
  }

  toggleMenu(){
    this.setState((prev)=>{
      return { showMenu: !prev.showMenu }
    });
  }

  async selectDeck(){
    let decks = await api.getDecks();
    decks.reverse();
    this.setState({
      screen: screens.SELECT_DECK,
      decks
    })
  }
  
  async changeDecks(deck){
    console.log(await api.selectDeck(deck.deck_id));
    this.setState({
      currentDeck: deck,
      screen: screens.HOME,
    })
  }

  shuffle(arra1) {
    var ctr = arra1.length, temp, index;

        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }
  
  async startGame(){
    let cards = await api.getDeckCards(this.state.currentDeck.deck_id);
    console.log(cards);
    cards = this.shuffle(cards);
    this.setState({screen: screens.PLAY_GAME, cards})
  }
  doneGame(score){
    let scorePercent = Math.round(score.score/score.index*100);
    if(!(scorePercent > 0 )) scorePercent = 0;
    api.addDeckScore(this.state.currentDeck.deck_id, scorePercent)
    this.setState({
      screen: screens.ALL_DONE,
      score
    })
  }
  goHome(){
    this.setState({
      screen: screens.HOME,
    })
  }
  changeName(e){
    this.setState({deckName:e.target.value})
  }

  async newDeck(){
    let events = await api.getEvents()
    this.setState({
      screen: screens.CHOOSE_EVENT,
      events
    })
  }

  async selectEvent(event){
    let people = await api.getPeople(event.group.urlname, event.id)
    for(let i = 0; i < people.length; i++){
      people[i].index = i;
      people[i].selected = false;
    }
    let deckName=event.name.length>30? event.name.slice(0,30)+"...":event.name;
    console.log(deckName)
    this.setState({
      deckName: deckName,
      event: event,
      screen: screens.SELECT_PEOPLE,
      people
    })
  }

  selectPerson(index){
    console.log(index)
    this.setState((prev)=>{
      let next = JSON.parse(JSON.stringify(prev.people))
      next[index].selected = !next[index].selected;
      return {people: next}
    })
  }
  
  backFromSelectPeople(){
    this.setState({
      screen: screens.CHOOSE_EVENT
    })
  }
  backFromSaveDeck(){
    this.setState({
      screen: screens.SELECT_PEOPLE
    })
  }
  cancelNewDeck(){
    this.setState({
      screen: screens.HOME
    })
  }
  doneSelecting(){
    this.setState({
      screen: screens.SAVE_DECK
    })
  }
  async saveDeck(){
    let retval = await api.addDeck(
      this.state.deckName,
      this.state.event,
      this.state.people
    )
    this.setState({
      screen: screens.HOME
    })
  }

  render(){
    const screen = this.state.screen;
    const showMenu = this.state.showMenu;
    return(
      <div className="container">
        <Header toggleMenu={ this.toggleMenu } />
        {showMenu && <Menu />}
        <div className="content">
          {screen == screens.ALL_DONE       && 
            <AllDone
              goHome={this.goHome}
              score={this.state.score}
              currentDeck={this.state.currentDeck}
              playAgain={this.startGame}
            />
          }
          {screen == screens.GROUP_CHOSEN   && <GroupChosen/>}
          {screen == screens.HOME           && 
            <Home 
              selectDeck={this.selectDeck}
              currentDeck={this.state.currentDeck}
              startPlaying={this.startGame}
              newDeck={this.newDeck}
            />
          }
          {screen == screens.PLAY_GAME      && 
            <PlayGame
              cards={this.state.cards}
              donePlaying={this.doneGame}
            />
            
          }
          {screen == screens.SELECT_DECK    && 
            <SelectDeck
              decks={this.state.decks}
              changeDecks={this.changeDecks}
            />
          }
          {screen == screens.CHOOSE_EVENT &&
            <ChooseEvent
              events={this.state.events}
              selectEvent={this.selectEvent}
            />
          }
          {screen == screens.SELECT_PEOPLE &&
            <SelectPeople
              people={this.state.people}
              selectPerson={this.selectPerson}
              done={this.doneSelecting}
              back={this.backFromSelectPeople}
            />
          }
          {screen == screens.SAVE_DECK &&
            <SaveDeck 
              people={this.state.people}
              saveDeck={this.saveDeck}
              deckName={this.state.deckName}
              changeName={this.changeName}
              back={this.backFromSaveDeck}
              cancel={this.cancelNewDeck}
              save={this.saveDeck}
            />
          }
        </div>
        <Footer />
      </div>
    )
  }
}