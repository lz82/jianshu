import React, { PureComponent } from 'react'

import HomeMain from './component/main'
import HomeSidebar from './component/sidebar'

import * as styles  from './home.module.scss';

class Home extends PureComponent {
  render () {
    return (
      <div className={styles.homewrapper}>
        <HomeMain />
        <HomeSidebar />
      </div>
    )
  }
}

export default Home