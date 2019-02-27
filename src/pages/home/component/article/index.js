import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import * as styles from './article.module.scss'

class HomeArticle extends PureComponent {
  render () {
    const ctx = this.props.content
    const title = ctx.get('title')
    const content = ctx.get('content')
    const pic = ctx.get('pic')
    const author = ctx.get('author')
    const rating = ctx.get('rating')
    const commentCnt = ctx.get('commentCnt')
    const likeCnt = ctx.get('likeCnt')
    
    return (
      <div
        className={styles['article-wrapper']}
      >
        <div
          className={styles['article-left']}
        >
          <h3 className={styles.title}><Link to="/">{title}</Link></h3>
          <p className={styles.content}>{content}</p>
          <p className={styles.summary}>
            {
              rating !== "" ?
              (
                  <span className={styles.rate}>
                    <i className="iconfont icon-zuanshi" />
                    {rating}
                  </span>
              )
              :
              ""
            }
            <span className={styles.author}>
              {author}
            </span>
            <span className={styles.cnt}>
              <i className="iconfont icon-pinglun2" />
              {commentCnt}
            </span>
            <span className={styles.cnt}>
              <i className="iconfont icon-like" />
              {likeCnt}
            </span>
          </p>
        </div>
        <div
          className={styles['article-right']}
        >
          {this.getThumbnail(pic, title)}
        </div>
      </div>
    ) 
  }

  getThumbnail(pic, title) {
    if (pic) {
      return (
          <img
            className={styles.thumbnail}
            src={pic}
            alt={title}
          />
      )
    } else {
      return ""
    }
  }

  getRate(rating) {
    if (rating !== '') {
      return (
        <span className={styles.rate}>
          <i className="iconfont icon-zuanshi" />
          {rating}
        </span>
      )
    } else {
      return ''
    }
  }
}

export default HomeArticle