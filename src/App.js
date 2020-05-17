import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
      loading: true
      
    };
  
    async componentDidMount() {
        // Call our fetch function below once the component mounts
        const url = "https://api.github.com/users/dragomegak/repos";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    render() {
      return (
        <div>
          // Render the newly fetched data inside of this.state.data 
          {this.state.loading ? <div>loading...</div> : <div>person...</div>}
        </div>
      );
    }
  }

export default App;
