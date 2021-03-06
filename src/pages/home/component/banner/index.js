import React, { PureComponent } from 'react'

import { Carousel } from 'antd'
import * as styles from './banner.module.scss'
import './common.scss'

class HomeBanner extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      picList: [
        'https://upload.jianshu.io/admin_banners/web_images/4613/e96eece16a9e3ae1699dd4bd0002666c571c30f5.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        'https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
      ]
    }
  }
  render() {
    const { picList } = this.state
    return (
      <div className={`homePageBannerWrapper ${styles.wrapper}`} >
        <Carousel 
          autoplay
        >
          {
            picList.map(item => {
              return (
                <img
                  key={item}
                  src={item}
                  alt="banner"
                  className="img"
                />
              )
            })
          }
        </Carousel>
      </div>
    )
  }
}

export default HomeBanner