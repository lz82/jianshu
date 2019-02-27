import React, { PureComponent } from 'react'
import { fromJS } from 'immutable'
import { Link } from 'react-router-dom'
import * as styles from './qrcode.module.scss'

class QRCode extends PureComponent {

  constructor (props) {
    super(props)
    
    this.state = {
      isHover: fromJS(false)
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  render () {
    const isHover = this.state.isHover
    
    return (
      <div
        className={styles.wrapper}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Link to="/download">
          <div className={styles['pic-wrapper']}>
            <img 
              className={styles.pic}
              alt="qrcode"
              src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
            />
          </div>
          <div className={styles.content}>
            <h4>下载简书手机App ></h4>
            <p>随时随地发现和创作内容</p>
          </div>
        </Link>
        <div
          className={`${styles.preview} ${isHover ? styles.active : ''}`}
        >
          <img
            alt="qrcode"
            src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
          />
        </div>    
      </div>
    )
  }

  handleMouseEnter () {
    this.setState({
      isHover: fromJS(true)
    })
  }

  handleMouseLeave () {
    this.setState({
      isHover: fromJS(false)
    })
  }
}

export default QRCode