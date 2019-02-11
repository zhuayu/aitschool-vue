class MyStorage {
  constructor() {
    this.storage = window.localStorage;
  }

  set(key, value, exp = 60){ // exp/秒，默认 60 秒
    let timestamp = Date.now();
    this.storage.setItem(key, { value, exp, timestamp });
  }

  get(key) {
    let data = this.storage.getItem(key);
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
    this.removeItem(key)
  }
}

export default MyStorage;
