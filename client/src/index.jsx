import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.jsx';

class App extends React.omponent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

render() {
  return(
    <div>
      Hello From the client
    </div>
  )
}
}


ReactDOM.render(<App />, document.getElementById('app'));