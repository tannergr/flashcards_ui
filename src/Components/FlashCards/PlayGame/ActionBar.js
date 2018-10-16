import React from 'react';

export default (props) => {
  console.log(props);
  if(props.show){
    return(
      <div className="actionBar">
        <div className="navButton done" onClick={props.exit}>
          Exit
        </div>
        <div className="separator" />
        <div className="navButton next" onClick={props.next}>
          Next
        </div>
      </div>
    )
  }
  if(props.guess >= 0){
    return(
      <div className="actionBar">
        <div className="navButton done" onClick={props.exit}>
          Exit
        </div>
        <div className="separator" />
        <div className="navButton confirm" onClick={props.confirm}>
          Confirm
        </div>
      </div>
    )
  }
  else{
    return(
      <div className="actionBar">
        <div className="navButton done" onClick={props.exit}>
          Exit
        </div>
      </div>
    )
  }
}