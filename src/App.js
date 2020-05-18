import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
      loading: true,
      projectName: [],
      projectDescription: [],
      projectUrl: [],
      techUsedUrl: [],
      lastUpdated: [],
      techUsed: [],
    };
  
    async componentDidMount() {
        // Call our fetch function below once the component mounts
        const url = "https://api.github.com/users/dragomegak/repos";
        const response = await fetch(url);
        const data = await response.json();
        let i = 0;
        for (i = 0; i < data.length; i++){
          this.state.projectName.push({projectName: data[i].name});
          this.state.projectDescription.push({projectDescription: data[i].description});
          this.state.projectUrl.push({projectUrl: data[i].html_url});
          this.state.lastUpdated.push({lastUpdated: data[i].updated_at});
          this.state.techUsedUrl.push({techUsedUrl: data[i].languages_url});
          /* use languages_url for more details on languages (in object), use language for large makup */
          /* need to find a way to fetch second link: languages used and only the key */
        }
        console.log(this.state.projectName)
        /* 
        console.log(this.state.projectDescription)
        console.log(this.state.projectUrl)
        console.log(this.state.lastUpdated)
        console.log(this.state.techUsed) 
        this.setState({projectName: data.results});
        console.log(data);
        console.log(data.length) 
        console.log(data[0].name);
        console.log(this.state.techUsedUrl[1])  
        this.techUsedList();*/
    }
    /* techUsedList = async () =>{
      let i = 0;
      for (i = 0; i < this.state.techUsedUrl.length; i++){
        const url = this.state.techUsedUrl[i];
        const response = await fetch(url);
        const data = await response.json();
        let j = 0;
        let tempList = [];
        for (j = 0; j < data.length; j++){
          tempList.push(data[i]);
          console.log(data[i]);
        }
        this.state.techUsed.push(tempList);
        console.log(this.state.data)
      }
    } */
    render() {
      return (
         <div>{/* Try to display the objects stored in state here */}
        </div>
      );
    }
  }

export default App;
