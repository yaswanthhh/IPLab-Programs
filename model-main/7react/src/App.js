import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {to:'', from:'', inp:''};
  }
  handleTo(event) {
    this.setState({to:event.target.value}); 
  }
  handleFrom(event) {
    this.setState({from:event.target.value}); 
  }
  convert(event) {
    this.setState({inp:event.target.value});
    var to = {this.state.to};
    var from = {this.state.from};
  }
  render() {
  return (
    <div>
      <form>
        From : <select name="from" id="from" onChange={this.handleTo}>
          <option id="hex1" value="Hexadecimal">Hexadecimal</option>
          <option id="bcd1" value="BCD">BCD</option>
          <option id="dec1" value="Decimal">Decimal</option>
        </select><br/><br/>
        To: <select name="to" id="to" onChange={this.handleFrom}>
          <option id="hex2" value="Hexadecimal">Hexadecimal</option>
          <option id="bcd2" value="BCD">BCD</option>
          <option id="dec2" value="Decimal">Decimal</option>
        </select><br/><br/>
        <input type="number" name="number" id="inp" onKeyPress={this.convert}/>
        <div id='convert'>Value: </div>
      </form>
    </div>
  );}
}

export default App;
