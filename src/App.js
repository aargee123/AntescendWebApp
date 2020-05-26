import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Team from './components/Team/Team';
import Particles from 'react-particles-js';
import './App.css';

const part = {
  particles : {
    number : {
      value : 50,
      density : {
        enable : true,
        value_area : 800
      }
    }
  }
}

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      route : 'home'
    }
  }

  onRouteChange = (data) => {
    this.setState({route : data});
  }

  render(){
    return (
      <div className = 'App w-100'>
          <Particles className = 'particles'
                params={part} />
        <Header onRouteChange = {this.onRouteChange}/>
        {
          this.state.route === 'home' 
          ?
          <div>
            <Home/>
          </div>
          :
          (
            this.state.route === 'projects'
            ?
            <div>
              <Projects/>
            </div>
            :
            <div>
              <Team/>
            </div>
          )
        }
      </div>
    );
  }
 
}

export default App;
