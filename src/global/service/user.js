import DataStore from '@/global/storage/datastore.js';
import request from '@/global/request/axios.js';
import webConfig from './webConfig.js';

export default {
  // 用户 token
  token () {
    let token = DataStore.map.get('token');
    if(token){
      return token
    }
    token = DataStore.storage.get('ait_token');
    if(token){
      DataStore.map.set('token',token);
      return token
    }
    return false
  },
  // 用户信息
  getUserInfo () {
    let userInfo = DataStore.map.get('userInfo');
    if(userInfo){
      return Promise.resolve(userInfo)
    }

    userInfo = DataStore.storage.get('userInfo');
    if(userInfo){
      DataStore.map.set('userInfo',userInfo);
      return Promise.resolve(userInfo)
    }

    return request.get(webConfig.urls.common.userInfo).then( userInfo => {
      DataStore.map.set('userInfo',userInfo);
      DataStore.storage.set('userInfo',userInfo);
      return userInfo
    })
  },
  // 用户登录
  login (code) {
    let name = 'github';
    return request.post(webConfig.urls.common.login,{ name, code }).then( token => {
      DataStore.map.set('token',token);
      DataStore.storage.set('ait_token',token);
      return token
    })
  }
}


