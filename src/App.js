import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state ={ 
  fullName : 'Amani',
  bio : 'bio', 
  imgSrc : '/myPhoto.png',
   profession : 'Prof',
    show: true,
    counter: 0
  };
  handleClick=()=>this.setState(
   {show :!this.state.show}
    
    )
    componentDidMount() {
      this.timerID = setInterval(
        () => this.setState(
          {
            counter: this.state.counter+1
          }
        ),
        1000
      );
    }
  render(){
    if(this.state.show){
  return (
    <div className="App">
      <header className="App-header">
        
      <img width="320px" src={this.state.imgSrc}></img>
      <h3>{this.state.fullName}</h3>
      <h3>{this.state.bio}</h3>
      <h3>{this.state.counter}</h3>
      <button style={{ background: '#0d43db', padding: '10px', borderRadius: '15px', border:'none', color:'#fff'  }} onClick={this.handleClick}> ClickMe</button>
      </header>
    </div>
  );
    }
    else{
      return (
      <div className="App">
      <header className="App-header">
      <button style={{ background: '#0d43db', padding: '10px', borderRadius: '15px', border:'none', color:'#fff' }} onClick={this.handleClick}> ClickMe</button>
      </header>
    </div>
      );
    }
  }
  
}

export default App;
