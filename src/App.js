import './App.css';
import Table from './components/Table';
import ButtonBlack from './components/ButtonBlack';
import ButtonRed from './components/ButtonRed';
import React from 'react';
import Counter from './components/Counter';
import ButtonUser1 from './components/ButtonUser1';
import ButtonUser2 from './components/ButtonUser2';
import Footer from './components/Footer';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    this.state = {
      isRedActive: false,
      isBlackActive: false,
      numClicksUser1: 0,
      numClicksUser2: 0,
      user1Input: '',
      user2Input: '',
    };
    this.manageClickUser1 = this.manageClickUser1.bind(this);
    this.manageClickUser2 = this.manageClickUser2.bind(this);
    this.handleRedClick = this.handleRedClick.bind(this);
    this.handleBlackClick = this.handleBlackClick.bind(this);
    this.manageNumberClickUser1 = this.manageNumberClickUser1.bind(this);
    this.manageNumberClickUser2 = this.manageNumberClickUser2.bind(this);
    this.handleUser1InputChange = this.handleUser1InputChange.bind(this);
    this.handleUser2InputChange = this.handleUser2InputChange.bind(this);
    // check for saved state data in local storage
    const savedState = JSON.parse(localStorage.getItem('appState'));
    if (savedState) {
      this.state = savedState;
    }
  }
 // saving data to device
  saveStateToLocalStorage = () => {
    localStorage.setItem('appState', JSON.stringify(this.state));
  }
  
  componentDidUpdate() {
    this.saveStateToLocalStorage();
  }
  
  manageClickUser1(){
    this.setState(({ numClicksUser1 })=>({ numClicksUser1: numClicksUser1 + 1}));
  }
  manageNumberClickUser1(){
    if(this.state.numClicksUser1 > 0){
      this.setState(({ numClicksUser1 })=>({ numClicksUser1: numClicksUser1 - 1}));
    }
  }
  
  manageClickUser2(){
    this.setState(({ numClicksUser2 })=>({ numClicksUser2: numClicksUser2 + 1}));
  }
  manageNumberClickUser2(){
    if(this.state.numClicksUser2){
      this.setState(({ numClicksUser2 })=>({ numClicksUser2: numClicksUser2 - 1}));
    }
  }
  

  handleRedClick() {
    this.setState({
      isRedActive: true,
      isBlackActive: false,
    });
  }

  handleBlackClick() {
    this.setState({
      isRedActive: false,
      isBlackActive: true,
    });
  }

  handleUser1InputChange(event) {
    this.setState({ user1Input: event.target.value });
  }
  
  handleUser2InputChange(event) {
    this.setState({ user2Input: event.target.value });
  }
 render() {
  const hrClassName = this.state.isRedActive ? 'hrColorRed' : 'hrColorBlack';
  return (
    <div className="App">
      <div className='buttonSuits'>
        <ButtonRed manageRedClick={this.handleRedClick} />
        <ButtonBlack manageBlackClick={this.handleBlackClick} />
      </div>
      <h1 className='h1-container'>CANASTRA</h1>
      <hr className={hrClassName} />



      <div className='coutingRounds'>


    <div className='users-name-container'>
         {/* user 1 */}
         <div className="input-container">
          
          <input
          className='input-user1'
          placeholder='Jogador 1'
            type="text"
            id="input-user1"
            value={this.state.inputUser1}
            onChange={(e) => this.setState({ inputUser1: e.target.value })}
          />
        </div>
    {/* user 2 */}

        <div className="input-container">
               <input className='input-user2'
            placeholder='Jogador 2'
            type="text"
            id="input-user2"
            value={this.state.inputUser2}
            onChange={(e) => this.setState({ inputUser2: e.target.value })}
          />
        </div>

    </div>

<div className='winner-loser-container'>

<Counter 
  numClicksUser1={this.state.numClicksUser1}
  manageNumberClickUser1={this.manageNumberClickUser1}   
/>
<ButtonUser1 
  text="+"
  manageClickUser1={this.manageClickUser1}
/>

<br>
</br>



<Counter 
  numClicksUser2={this.state.numClicksUser2}
  manageNumberClickUser2={this.manageNumberClickUser2}   
/>
<ButtonUser2
  text="+" 
  manageClickUser2={this.manageClickUser2}
/>
</div>
</div>
       <Table  />
      <br/>
      <hr className={hrClassName} />
      <Footer />
    </div>
  );
}

 
}

export default App;