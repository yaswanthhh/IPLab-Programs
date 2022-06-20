import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">COUNTRIES AND CAPITALS</header>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>Copyright @ 2022</footer>
    );
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.country}</td>
        <td>{this.props.data.capital}</td>
      </tr>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {data : [{"country":"India","capital":"Delhi"}, {"country":"Germany","capital":"Berlin"}, {"country":"Isreal","capital":"Jerusalem"}]};
  }
  
  render() {
    return (
      <div>
        <Header />
        <div className="spacer"></div>
        <table className="table-view"><thead><tr><td>Countries</td><td>Capitals</td></tr></thead>
        {this.state.data.map((item, i) => <TableRow key={i} data={item} />)}
        </table>
        <Footer />
      </div>
    );
  }
}
export default App;
