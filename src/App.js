import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
      loading: true,
      projectName: [],
      projectDescription: [],
      projectUrl: [],
      techUsed: [],
    };
  
    async componentDidMount() {
        // Call our fetch function below once the component mounts
        const url = "https://api.github.com/users/dragomegak/repos";
        const response = await fetch(url);
        const data = await response.json();
        var i;
        for (i = 0; i < data.length; i++){
          this.state.projectName.push({projectName: data[i].name});
          this.state.projectDescription.push({projectDescription: data[i].description});
          this.state.projectUrl.push({projectUrl: data[i].html_url});
          this.state.techUsed.push({techUsed: data[i].languages_url});
        }
        console.log(this.state.projectName)
        console.log(this.state.projectDescription)
        console.log(this.state.projectUrl)
        console.log(this.state.techUsed)
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
