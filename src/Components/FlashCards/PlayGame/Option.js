
import React from 'react';

export default (props) => {
  console.log('__________');
  console.log(props.show);
  console.log(props.actual);
  console.log(props.guess);
  console.log(props.optIndex);
  let className = "option";
  if(props.show && props.guess == props.optIndex){
    if(props.guess == props.actual)
      className += " correct";
    else className += " incorrect";
  } else if(props.show && props.actual == props.optIndex){
    className += " correct";
  } else if(props.guess == props.optIndex){
    className += " selected";
  }
  console.log(className);
  console.log('__________');
  return(
    <div 
      className={className}
      onClick={props.show?null:props.select}
    >
      {props.name}
    </div>
  )
}