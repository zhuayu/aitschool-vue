import userService from './user.js';
import qiniuService from './qiniu.js';

const Service = {
  user: userService,
  qiniu: qiniuService,
}

export default Service;