import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { searchkeyChange, searchFocusChange, hotActiveChange, hotListGet, hostIndexChange } from './store/action-creator'

import styles from './page-header.module.scss'
import './transition.css'
import '../../style/iconfont/iconfont.css'

class PageHeader extends Component {

  render () {
    const { keyword, searchFocus, hotActive, hotList, hotIndex, 
      onKeywordChange, onSearchBlur, onSearchFocus, onHotEnter, onHotLeave, onHotChange } = this.props
    return (
      <header className={styles.pageHeaderWrapper}>
        <div className={styles.container}>
          <a 
            href="/" 
            className={styles.logo} 
          >
          </a>
          <div className={styles.center}>
            <div className={styles['center-left']}>
              <a
                href="/"
                className={styles.home}
              >
                <i className="iconfont icon-zhinanzhen" />
                <span>首页</span>
              </a>
              <a
                href="/"
                className={styles.download}
              >
                <i className="iconfont icon-browserdownload2" />
                <span>下载APP</span>
              </a>
              <div
                className={styles.searchWrapper}
              >
                <form>
                  <CSSTransition
                    in={searchFocus}
                    timeout={200}
                    classNames='slide'
                  >
                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="搜索"
                      className={styles.searchInnput}
                      // className={searchFocus ? styles.active : ''}
                      value={keyword}
                      onChange={onKeywordChange}
                      onBlur={onSearchBlur}
                      onFocus={onSearchFocus}
                    />
                  </CSSTransition>
                  <a
                    href="/"
                    className={styles.searchBtn + ' ' + (searchFocus ? styles.active : '')}
                  >
                    <i
                      className="iconfont icon-search"
                    />
                  </a>
                  <div
                    className={styles['hot-search'] + ' ' + ((hotActive || searchFocus) ? styles.active : '')}
                    onMouseEnter={onHotEnter}
                    onMouseLeave={onHotLeave}
                  >
                    <div className={styles.title}>
                      <span className={styles['hot-search-title-left']}>热门搜索</span>
                      <span 
                        className={styles['hot-search-title-right']}
                        onClick={onHotChange}
                      >
                        <i className="iconfont icon-shuaxin" />
                        换一批
                      </span>
                    </div>
                    <div className={styles.content}>
                      <ul>
                        {this.getHotItem(hotList, hotIndex)}
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>    
            <div className={styles['center-right']}>
              <i
                className={`iconfont icon-Aa ${styles.font}`}
              />
              <a
                href="/"
                className={styles.login}
              >
                登录
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <a
              href="/"
              className={styles.register}
            >
              注册
            </a>
            <a
              href="/"
              className={styles['write-doc']}
            >
              <i 
                className={`iconfont icon-quill ${styles.write}`}
              />
              写文章
            </a>
          </div>
        </div>
      </header>
    )
  }

  showHot () {
    if (this.props.hotActive || this.props.searchFocus) {
      return 'styles.active'
    } else {
      return ''
    }
  }

  getHotItem(hotList, hotIndex) {
    return hotList.slice(hotIndex * 10, (hotIndex + 1) * 10)
          .map(item => {
            return (
              <li key={item} className={styles['hot-item']}><span>{item}</span></li>
            )
          })
  }
}

const mapStateToProps = state => {
  return {
    // 两种不同的写法
    keyword: state.getIn(['pageHeader', 'searchKey']),
    searchFocus: state.get('pageHeader').get('searchFocus'),
    hotActive: state.getIn(['pageHeader', 'hotActive']),
    hotList: state.getIn(['pageHeader', 'hotList']),
    hotIndex: state.getIn(['pageHeader', 'hotIndex'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onKeywordChange (e) {
      dispatch(searchkeyChange(e.target.value))
    },

    onSearchBlur () {
      dispatch(searchFocusChange(false))
    },

    onSearchFocus () {
      dispatch(hotListGet())
      dispatch(searchFocusChange(true))
    },

    onHotEnter () {
      dispatch(hotActiveChange(true))
    },

    onHotLeave () {
      dispatch(hotActiveChange(false))
    },

    onHotChange () {
      dispatch(hostIndexChange())
    }
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader)