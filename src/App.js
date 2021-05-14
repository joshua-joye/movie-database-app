import React, { Component } from 'react';
import './App.css';
import tmdbLogo from './tmdb-logo.svg'

class App extends Component {

    state = {
      film: []
    }

    films = [
      'Film One',
      'Film Two',
      'Film Three'
    ];

    filmList = [
      {id: 1, title: 'film one', subject: 'action'},
      {id: 2, title: 'film two', subject: 'drama'},
      {id: 3, title: 'film three', subject: 'comedy'}
    ];

    componentDidMount() {
      this.setState({ film: [...this.filmList] });
    };


  render() {
  return (
    <div className="App">
      {console.log(this.state.film.map(item => item.subject))}
      <header>
        <div className="Header-Wrap">
          <div>
            <img className="svg-logo" src={tmdbLogo} alt="Website Logo"></img>
          </div>
          <div>
            <h3>The Movie Database Search App</h3>
            <h5>Test App</h5>
          </div>
        </div>
      </header>
      <article>
        <form>
          <label htmlFor="search">Search</label>
          <input type="text" id="search"></input>
        </form>
        <div>
          Film List
          <ul>
            {this.state.film.map(movie => <li key={movie.id}>{movie.title} {movie.subject}</li>)}
          </ul>
        </div>
      </article>
    </div>
  );
}
}


export default App;
