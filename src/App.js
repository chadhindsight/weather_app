import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './containers/SearchBar';
import WeatherList from './containers/WeatherList';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}

export default App;
