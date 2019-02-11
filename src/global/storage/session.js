class SessionStorage {
  constructor() {
    this.storage = window.sessionStorage;
  }

  set(key, value){
    this.storage.setItem(key,value);
  }

  get(key) {
    return this.storage.getItem(key);
  }

  delete(key) {
    this.removeItem(key)
  }
}

export default SessionStorage;
