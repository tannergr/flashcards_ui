import React, {Component} from 'react';
import Option from './Option';
import ActionBar from './ActionBar';
import './Game.css'

export default class PlayGame extends Component {
  constructor(){
    super();
    this.state = {
      index: 0,
      guess: -1,
      score: 0,
      show: false,
    }
    this.guess = this.guess.bind(this);
    this.confirm = this.confirm.bind(this);
    this.next = this.next.bind(this);
    this.exit = this.exit.bind(this);
  }
  guess(guess){
    console.log(guess);
    this.setState({guess: guess});
  }
  confirm(){
    let actual = this.props.cards[this.state.index].actual;
    let incrementScore = 0;
    if(actual == this.state.guess) incrementScore = 1;
    this.setState((prev)=>{
      return{
        score: prev.score + incrementScore,
        show: true,
      }
    })
  }
  exit(){
    let score = this.state.score;
    let index = this.state.index;
    this.props.donePlaying({score, index});
  }
  next(){
    if(this.state.index + 1 >= this.props.cards.length){
      this.exit();
      return;
    }
    this.setState((prev)=>{
      return{
        index: prev.index + 1,
        guess: -1,
        show: false,
      }
    })
  }
  render(){
    const index = this.state.index;
    const cards = this.props.cards;
    console.log(cards);
    return(
      <div className="game">
        <div className="avatarContainer" >
            <img className="avatar" src={cards[index].photo}/>
        </div>
        <div className="options">
          <Option 
            name={cards[index].names[0]}
            guess={this.state.guess}
            actual={cards[index].actual}
            optIndex={0}
            show={this.state.show}
            select={()=>this.guess(0)}
          />
          <Option 
            name={cards[index].names[1]}
            guess={this.state.guess}
            actual={cards[index].actual}
            optIndex={1}
            show={this.state.show}
            select={()=>this.guess(1)}
          />
          <Option 
            name={cards[index].names[2]}
            guess={this.state.guess}
            actual={cards[index].actual}
            optIndex={2}
            show={this.state.show}
            select={()=>this.guess(2)}
          />
          <Option 
            name={cards[index].names[3]}
            guess={this.state.guess}
            actual={cards[index].actual}
            optIndex={3}
            show={this.state.show}
            select={()=>this.guess(3)}
          />
        </div>
        <ActionBar {...this.state}
          exit={this.exit}
          next={this.next}
          confirm={this.confirm}
        />
      </div>
    )
  }
}