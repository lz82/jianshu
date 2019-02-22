import React, { Component } from 'react';

import { PageHeader } from './components/page-header'
import { Provider } from 'react-redux'

import store from './store'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PageHeader />
        </div>
      </Provider>
    );
  }
}

export default App;
