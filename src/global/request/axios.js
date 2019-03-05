import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN'
// axios.defaults.timeout = 8000

// 全局错误处理
const handleErrorRequest = (error) => {
  let response = error.response;
  let status =  response ? response.status : 408;
  // let data = response.data;
  // let errors = data.errors;
  // let message = data.message;
  if (status === 401) {
    // console.log('没有登录')
  } else if (status === 419) {
    // console.log('页面过期')
  } else if (status === 422 || status === 423) {
    // console.log('参数校验失败',errors)
  } else if( status === 408){
    alert('请求超时，请检查网络后刷新页面 ～')
  }else{
    // 一般情况下需要上报
    // eslint-disable-next-line
    console.log('其他错误')
  }
}

// 添加一个请求拦截器（ 一般用于鉴权 )
import DataStore from '@/global/storage/datastore.js';
axios.interceptors.request.use(function (config) {
  let tokenValue = DataStore.map.get('token') || DataStore.storage.get('token');
  if(tokenValue){
    DataStore.map.set('token',tokenValue);
    config['headers'] = {
      Authorization: `Bearer ${tokenValue.token}`
    }
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use( res => {
  // 兼容包了一层 { code, data } 的情况
  switch(true) {
    // data.code 返回不等于200 代表业务错误
    case res.data.code && res.data.code !== 200:
      return Promise.reject(res.data);
    // data.code 不等于 0，返回 data.data
    case !!res.data.code:
      return res.data.data;
    // data.code 不存在直接返回 data 数据
    default:
      return res.data;
  }
}, error => {
  handleErrorRequest(error);
  return Promise.reject(error)
})

/* [请求库]
** @params url         { string }   @default => '' [接口地址，统一在global/resource文件中]
** @params data/params { object }   @default => {} [发送数据]
** @params config      { object }   配置
*/

export default {
  post: function (url='', data={}, config) {
    return axios.post(url, data, config);
  },

  put: function (url='', data={}, config) {
    return axios.put(url, data, config);
  },

  get: function (url, params={}, config) {
    let OPTIONS = Object.assign({ params }, config);
    return axios.get(url, OPTIONS)
  },

  delete: function (url='', params={}, config) {
    let OPTIONS = Object.assign({ params }, config);
    return axios.delete(url, OPTIONS)
  }
}
