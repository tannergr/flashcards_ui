import helper from './fetchHelper';

export default {

  // /api/events Methods("GET")
  getEvents(){
    return helper('/api/events',"GET",{});
  },

  // /api/events/{groupname}/{eid} Methods("GET")
  getPeople(groupname, eid){
    return helper(`/api/events/${groupname}/${eid}`,"GET",{});
  },
  
  // /api/member Methods("GET")
  getMember(){
    return helper('/api/member',"GET",{});
  },

  // /api/deck Methods("POST")
  addDeck(deckName, event, people){
    let deck = {
      name: deckName,
      event_id: event.id,
      group_name: event.group.urlname,
      cards: []
    }
    console.log(deck);
    for(let i = 0; i < people.length; i++){
      let person = people[i];
      if(person.selected && person.member.photo){
        console.log(person.member)
        deck.cards.push({
          meetup_id: person.member.id
        })
      }
    }
    console.log(deck)
    return helper('/api/deck',"POST", deck);
  },

  // /api/deck Methods("GET")
  getDecks(){
    return helper('/api/deck',"GET",{});
  },
  
  // /api/deck/{deckID} Methods("GET")
  getDeckCards(deckID){
    return helper(`/api/deck/${deckID}`,"GET",{});
  },

  // /api/deck/{deckID}/score/{score} Methods("POST")
  addDeckScore(deckID, score){
    return helper(`/api/deck/${deckID}/score/${score}`,"POST",{});
  },

  // /api/deck/{deckID}/select Methods("Post")
  selectDeck(deckID){
    return helper(`/api/deck/${deckID}/select`,"POST",{});
  },

  // /api/member/deck Methods("GET")
  getLastDeck(){
    return helper(`/api/member/deck`, "GET", {})
  }
}