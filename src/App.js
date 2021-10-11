import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Captcha from './components/captcha';

class App extends React.Component {
  render() {
    return <React.Fragment>
      <main className="container">
        <Switch>
          <Route path="/" component={Captcha} />
          <Redirect to="/" />
        </Switch>
      </main>
    </React.Fragment>
  }
}

export default App;
