import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import axios from 'axios';

class App extends Component {
  
  getGalleryItems = () => {
    axios.get('/gallery')
    .then( response => {
      console.log(response.data);
    }).catch( error => {
      console.log(error);
      alert('error in GET');
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
