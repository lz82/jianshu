import React, { PureComponent, Suspense, lazy } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { PageHeader } from './components/page-header'

import store from './store'

import './App.css';


const Home = lazy(() => import('./pages/home'))
const Download = lazy(() => import('./pages/download'))
const Detail = lazy(() => import('./pages/detail'))

console.log(Home)

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <PageHeader />
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {/* 使用懒加载后报错，临时用这种方法hack */}
                <Route exact path="/" component={props => <Home {...props} />} />
                <Route exact path="/download" component={props => <Download {...props} />} />
                <Route exact path="/detail/:id" component={props => <Detail {...props} />} />
              </Switch>
            </Suspense>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
