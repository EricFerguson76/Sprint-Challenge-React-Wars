import React from 'react';


const CharacterCard = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.birth}</h3>
      <h3>{props.gender}</h3>
      <h3>{props.color}</h3>






    </div>

  );
};


export default CharacterCard;