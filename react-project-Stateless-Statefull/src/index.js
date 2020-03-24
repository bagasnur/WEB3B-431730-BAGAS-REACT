import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const CobaStatelessComp = () => {
   return <h1>Stateless Component Success</h1>
}

class StatefullCompJajal extends React.Component {
   render(){
      return <h1>Statefull Component Success</h1>
   }
}

ReactDOM.render(<StatefullCompJajal />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
