import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
      loading: true,
      projectName: [],
    };
  
    async componentDidMount() {
        // Call our fetch function below once the component mounts
        const url = "https://api.github.com/users/dragomegak/repos";
        const response = await fetch(url);
        const data = await response.json();
        var i;
        for (i = 0; i < data.length; i++){
          this.state.projectName.push({projectName: data[i].name});
        }
        console.log(this.state.projectName)
        /* this.setState({projectName: data.results});
        console.log(data);
        console.log(data.length) */
        /* console.log(data[0].name); */
    }
    render() {
      return (
        <div>
          {/* Render the newly fetched data inside of this.state.data */} 
          {this.state.loading || !this.state.projectName ? (
            <div>loading...</div>
            ) : (
            <div><div>{this.state.projectName}</div></div>
          )}
        </div>
      );
    }
  }

export default App;
