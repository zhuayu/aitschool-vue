class MyStorage {
  constructor() {
    this.prefix = 'ait_';
    this.storage = window.localStorage;
  }

  set(key, value, exp = 60 * 60 * 24 ){ // exp/秒，默认 60 * 60 * 24 = 1 天
    let timestamp = Date.now();
    let data = JSON.stringify({ value, exp, timestamp });
    key = this.prefix + key;
    this.storage.setItem(key, data);
  }

  get(key) {
    key = this.prefix + key;
    let data = this.storage.getItem(key);
    if(!data){
      return false
    }
    data = JSON.parse(data);
    let exp = data.exp * 1000;
    let timestamp = data.timestamp;
    let value = data.value;
    let dataNow = Date.now();
    if(dataNow > timestamp + exp){
      this.delete(key);
      return false
    }else{
      return value;
    }
  }

  delete(key) {
    this.storage.removeItem(key)
  }
}

export default MyStorage;
