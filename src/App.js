import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { PageHeader } from './components/page-header'

import store from './store'

import './App.css';

import Home from './pages/home'
import Download from './pages/download'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <PageHeader />
              <Fragment>
                <Route exact path="/" component={Home} />
              <Route exact path="/download" component={Download} />
              </Fragment>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
