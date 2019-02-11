/* 
** DataStore 变量缓存器
** 方便我们在不同的类中访问和修改变量
** 相当于全局变量使用
**
** map 使用方法
** import DataStore  from '@/global/storage/datastore.js';
** const userInfoInDataStore = DataStore.map.get('userInfo');
** DataStore.map.set('userInfo',storageUserInfo);
** 
** 同时封装使用 strorage、session、cookie
** storage
** session
** cookie
*/

import MyCookie from './cookie.js';
import MyStorage from './storage.js';
import MySession from './session.js';

class DataStore{
  constructor() {
    this.init();
  }

  init() {
    this.map = new Map();
    this.storage = new MyStorage();
    this.session = new MySession();
    this.cookie = new MyCookie();
  }

  static getInstance() {
    if(!DataStore.instance) {
        DataStore.instance = new DataStore();
    }
    return DataStore.instance;
  }
}

export default DataStore.getInstance();

