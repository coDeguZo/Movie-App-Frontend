import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import logo from './logo.svg';
import randomcolor from 'randomcolor'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/movies")
    .then(resp => resp.json())
    .then(data => this.setState({movies: data}))
  }


  render(){
    return(
      <div>
        <h1> Movie Application </h1>
      </div>
    )
  }
}

export default App;
