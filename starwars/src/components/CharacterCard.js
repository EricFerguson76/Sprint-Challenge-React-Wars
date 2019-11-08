import React from 'react';
import styled from 'styled-components'



const Card = styled.div`
background: #65737e;
width: 350px;
max-height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
box-shadow: 5px 5px #4f5b66 ;
border: 2px solid white;
font-family: 'Yeon Sung', cursive;
color: #c0c5ce;
`;





const CharacterCard = props => {
  return (

    <Card>
      <h1>{props.name}</h1>
      <h3>{props.birth}</h3>
      <h3>{props.gender}</h3>
      <h3>{props.color}</h3>
    </Card>


  );
};


export default CharacterCard;