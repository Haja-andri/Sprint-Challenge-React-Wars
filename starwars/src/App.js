import React, { Component } from 'react';
import './App.css';
import Board from './components/board/board';
import Array from './components/array/arrays'


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  render() {
    return (
      <div className="the-body">
        <div className="top">
        <h1 className="Header">React Wars</h1>
        </div>
        <div className="core">
          {            
            this.state.starwarsChars.map(char => (
              <>
              <Board
                name={char.name}
                dob={char.birth_year}
                height={char.height}
                gender={char.gender}
                skin={char.skin_color}
              />
              <Array 
                films = {char.films}
                startships ={char.startships}
                getFilms = {this.getFilms}
              />
              </>
              )
            )
          }
        </div>
      </div>
      

    );
  }
}

export default App;
