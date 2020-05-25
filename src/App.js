import React from 'react';
import Home from './components/Home/Home';
import ParticlesBg from 'particles-bg';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Team from './components/Team/Team';
import './App.css';

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
        <ParticlesBg type="cobweb" bg={true} />
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
