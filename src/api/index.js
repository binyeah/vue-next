import axios from 'axios'
const baseUrl = "http://192.168.7.206:80"

const service = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: { "Content-Type": "application/x-www-form-urlencoded"},
  // withCredentials: true
})

const api = function (method, url, data) {
  // console.log("[axio] url:" + url + ",params:"+ JSON.stringify(params) + ",data:"+ JSON.stringify(data))
  return new Promise((resolve, reject) => {
    service({method,url, data})
    .then((res) => {
      // console.log("[axio] return:", res)
      
      if(res.data.code==200){
        resolve(res.data)
      } else {
        // console.log(res.data)
      }
    }).catch((err) => { 
      reject(err)
      console.log('err:',err);
    })
  })
}
export default api