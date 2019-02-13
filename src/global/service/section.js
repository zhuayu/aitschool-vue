import DataStore from '@/global/storage/datastore.js';
import request from '@/global/request/axios.js';
import webConfig from './webConfig.js';

export default {
  info (id) {
    let datas = DataStore.storage.get('section_' + id);
    if(datas){
      return Promise.resolve(datas);
    }
    return request.get(webConfig.urls.section.info(id)).then( sectionInfo => {
      DataStore.map.set('section_' + id,sectionInfo);
      DataStore.storage.set('section_' + id,sectionInfo);
      return sectionInfo
    })
  }
}


