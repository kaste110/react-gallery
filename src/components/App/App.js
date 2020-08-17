import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import axios from 'axios';

class App extends Component {

  state = {
    galleryItems : []
  }
  
  componentDidMount() {
    this.getGalleryItems();
  }

  getGalleryItems = () => {
    axios.get('/gallery')
    .then( response => {
      console.log(response.data);
      this.setState({
        galleryItems : response.data
      })
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
        <GalleryList 
        listOfPhotos={this.state.galleryItems} />
      </div>
    );
  }
}

export default App;
