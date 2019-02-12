import DataStore from '@/global/storage/datastore.js';
import request from '@/global/request/axios.js';
import webConfig from './webConfig.js';

export default {
  info (id) {
    let datas = DataStore.storage.get('course_' + id);
    if(datas){
      return Promise.resolve(datas);
    }
    return request.get(webConfig.urls.course.info(id)).then( courseInfo => {
      DataStore.map.set('course_' + id,courseInfo);
      DataStore.storage.set('course_' + id,courseInfo);
      return courseInfo
    })
  }
}


