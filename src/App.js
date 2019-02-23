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
          <div>
            <img src="//upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
