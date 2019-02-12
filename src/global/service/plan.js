import DataStore from '@/global/storage/datastore.js';
import request from '@/global/request/axios.js';
import webConfig from './webConfig.js';

export default {
  info (id) {
    let datas = DataStore.storage.get('plan_' + id);
    if(datas){
      return Promise.resolve(datas);
    }
    return request.get(webConfig.urls.plan.info(id)).then( planInfo => {
      DataStore.map.set('plan_' + id,planInfo);
      DataStore.storage.set('plan_' + id,planInfo);
      return planInfo
    })
  }
}


