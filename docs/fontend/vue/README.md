# 这里会是 vue 的一些项目可能用到的

## axios 的封装

```js
// 文件名: utils/request.js
// 导入axios
import axios from "axios";
// 导入进度条组件
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// 定义一些全局的变量
const TIME_OUT = 3 * 1000;
// 创建ygaxios实例
const service = axios.create({
  // 根据 .env.development .env.production 来区分接口地址
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: TIME_OUT,
});
// 请求拦截器
service.interceptors.request.use((config) => {
  // 拦截操作 可以增加对应的token
  return config;
});
// 响应拦截器
service.interceptors.response.use(
  (res) => res.data,
  (err) => {
    // 可以给出弹框提示
    console.log("出錯了err", err);
    return Promise.reject(err);
  }
);
const request = {
  // 封装get请求
  get(url,params = {}) {
    let _params = "?"
    if(Object.keys(params).length > 0) {
      for(const key in params) {
        if(params.hasOwnProperty(key) && params[key] !== null) {
          _params += `${key}=${params[key]}&`
        }
      }
    }
    return service.get(`${url}${_params}`)
  }
  post(url,params) {
    return service.post(url,params,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest:[
        params => transParams(params)
      ]
    })
  }
  downlaod(url,params,filename) {
    return service.post(url,params,{
      transformRequest:[params => transParams(params)],
      responseType:'blob' // 注意
    }).then(res => {
      const content = res.data;
      const blob = new Blob([content])
      if('download' in document.createElement('a')) {
        const elink = document.createElement('a')
        elink.download = filename
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href)
        document.body.removeChild(elink)
      }else {
        navigator.msSaveBlob(blob, filename)
      }
    }).catch(err => console.log('下载失败'))
  }
}
function transParams(params) {
  let result = '';
  Object.keys(params).forEach(key => {
    if(!Object.is(params[key],undefined) && !Object.is(params[key],null)) {
      result +=  `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}&`
    }
  })
  return result;
}
export default request
```

## 本地存储的封装

```js
// 文件名: utils/cache.js
class LocalCache {
  setCache(ket, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  getCache(key, defaultValue = {}) {
    return JSON.parse(window.localStorage.getItem(key)) || defaultValue;
  }
  deleteCache(key) {
    window.localStorage.removeItem(key);
  }
  clearCache() {
    window.localStorage.clear();
  }
}
export default new LocalCache();
```

## 其他一些常用的方法

```js
// 文件名：utils/index.js
```

## vue 中将 vuex 和本地存储结合起来的方法

::: tip
问题: 由于 vuex 的存储为内存存储，在我们刷新浏览器的时候数据会消失，因此，我们需要保存 vuex 的持久化
:::

```js
解决方法:
```
