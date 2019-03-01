import React, { PureComponent } from 'react'

import HomeMain from './component/main'
import HomeSidebar from './component/sidebar'
import BackTop from '../../components/back-top'

import * as styles  from './home.module.scss';

class Home extends PureComponent {
  render () {
    return (
      <div className={styles.homewrapper}>
        <HomeMain />
        <HomeSidebar />
        <BackTop />
      </div>
    )
  }
}

export default Home