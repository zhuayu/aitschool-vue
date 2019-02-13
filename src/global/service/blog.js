import DataStore from '@/global/storage/datastore.js';
import request from '@/global/request/axios.js';
import webConfig from './webConfig.js';

export default {
  info (id) {
    let datas = DataStore.storage.get('blog_' + id);
    if(datas){
      return Promise.resolve(datas);
    }
    return request.get(webConfig.urls.blog.info(id)).then( blogInfo => {
      DataStore.map.set('blog_' + id,blogInfo);
      DataStore.storage.set('blog_' + id,blogInfo);
      return blogInfo
    })
  }
}


