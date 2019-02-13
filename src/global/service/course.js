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
  },

  buyStatus (id) {
    let datas = DataStore.storage.get('buy_status_course_' + id);
    if(datas){
      return Promise.resolve(datas);
    }
    return request.get(webConfig.urls.course.status(id)).then( buyStatus => {
      DataStore.map.set('buy_status_course_' + id,buyStatus);
      DataStore.storage.set('buy_status_course_' + id,buyStatus);
      return buyStatus
    })
  }
}


