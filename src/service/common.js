import axios from 'axios'

export function getHotSearchKey () {
  return new Promise((resolve, reject) => {
    // axios({
    //   method: 'get',
    //   url: 'https://www.jianshu.com/trending_search',
    //   // headers: {
    //   //   'authority': 'www.jianshu.com',
    //   //   'path': '/trending_search',
    //   //   // 'referer': 'https://www.jianshu.com/'
    //   // }
    // })
    axios.get('http://localhost:3000/trending.json')
    .then(res => {
      resolve(res.data)
    })
    .catch(err => {
      reject(err)
    })
  })
}