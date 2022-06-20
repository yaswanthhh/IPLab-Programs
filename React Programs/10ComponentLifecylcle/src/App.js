import React from 'react';
import ReactDOM from 'react-dom';

// import Header from './1getDerivedStateFrom';
// import Header from './2componentDidMount';
// import Header from './3shouldComponentUpdate';
// import Header from './4getSnapshotBeforeUpdate';
import Header from './5componentWillUnmount';

class App extends React.Component {
  render() {
	  return <Header favcol="yellow"/>;
  }
}

export default App;
