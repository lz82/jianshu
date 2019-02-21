import React, { Component } from 'react'

import styles from './page-header.module.scss'
import '../../style/iconfont/iconfont.css'

class PageHeader extends Component {

  render () {
    return (
      <header className={styles.pageHeaderWrapper}>
        <div className={styles.container}>
          <a href="/" className={styles.logo} />
          <div className={styles.center}>
            <span className={styles.home}><i className="iconfont icon-zhinanzhe" />首页</span>
          </div>
          <div className={styles.right}>
            right
          </div>
        </div>
      </header>
    )
  }
}

export default PageHeader