import React, { Component } from 'react';
import logo from './logo.svg';
import cat from './cat.gif';
import './App.css';
import ImageButton from './components/ImageButton.react'
import CustomImage from './components/CustomImage.react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <br/>
        <ImageButton uniqueId="imageButton" titleText="Get random cat image"/>
        {/*<br/>
        <br/>
        <CustomImage uniqueId="customImage" imageUrl={cat} />*/}
      </div>
    );
  }
}

export default App;
