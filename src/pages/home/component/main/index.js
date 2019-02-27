import React, { PureComponent } from 'react'
import { fromJS } from 'immutable'
import HomeBanner from '../banner'
import HomeArticle from '../article'

import * as styles from './main.module.scss'
import { homeApi } from '../../../../service'

class HomeMain extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      articleList: fromJS([])
    }
  }

  async componentDidMount () {
    const articleList = await homeApi.getHomeArticleList()
    this.setState({'articleList':  fromJS(articleList)})
    
  }

  render () {
        
    return (
      <div className={styles["main-wrapper"]}>
        <HomeBanner />
        <div className={styles['content-wrapper']}>
          {
            this.state.articleList.map((item, index) => {
              return (
                <HomeArticle key={index} content={item} />
              )
            })
          }
          <span className={styles.more}>阅读更多</span>
        </div>
      </div>
    )
  }
}

export default HomeMain