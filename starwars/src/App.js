import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CharacterCard from './components/CharacterCard'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        const characters = response.data.results;
        console.log(response.data.results)
        setCharacters(characters)
      })
      .catch(error => [
        console.log(error)
      ]);

  }, []);

  return (
    <>
      <div className="App">
        <h1 className="Header">React Wars</h1>
      </div>

      <div>
        {characters.map((character, index) => {
          return (
            <CharacterCard
              key={index}
              name={character.name}
              birth={character.birth_year}
              gender={character.gender}
              color={character.skin_color}

            />
          )
        })}
      </div>
    </>
  );
}

export default App;
