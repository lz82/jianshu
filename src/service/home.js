import axios from 'axios'

export function getHomeArticleList() {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3000/home.json')
      .then(res => {
        resolve(res.data.articleList)
      })
      .catch(err => {
        reject(err)
      })
  })
}