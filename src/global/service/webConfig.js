const VERSION = 'V0.0.1';
const MODE = 'production';
const apiprefix  = '';
const apiHost    = 'https://api.aitschool.com';
const PREFIX  = apiHost + apiprefix;
const githubClientId = '0afe04184c7f3628940d';
const githubRedirctURI = 'https%3A%2F%2Fwww.aitschool.com';
// const githubRedirctURI = 'http%3A%2F%2Flocalhost:8080';

const githubLoginURL = 'https://github.com/login/oauth/authorize';


const webConfig = {
  VERSION,
  MODE,
  githubLoginURL: `${githubLoginURL}?client_id=${githubClientId}&redirect_uri=${githubRedirctURI}%2Flogin%2Foauth%2Fcallback%2Fgithub&scope=user%3Aemail%2Crepo%2Cuser%2Cgist&response_type=code`,
  githubCallbackURL: PREFIX + '/login/oauth/callback/github',
  urls: {
    common: {
      qrcode: (str) => PREFIX + '/qrcode?str=' + str,
      login: PREFIX + '/auth/oauth2',
      userInfo: PREFIX + '/auth/user',
      buyPlan: (id) =>  PREFIX + '/course/buy/plan/' + id,
      buyCourse: (id) => PREFIX + '/course/buy/course/' + id
    },
    plan: {
      list: PREFIX + '/course/plans',
      info: (id) => PREFIX + '/course/plans/' + id,
      status: (id) => PREFIX + '/course/plans/' + id + '/buy-status',
    },
    course: {
      list: PREFIX + '/course/courses',
      my: (id) => PREFIX + '/course/plans/'  + id + '/my-course',
      info: (id) => PREFIX + '/course/courses/' + id,
      status: (id) => PREFIX + '/course/courses/' + id + '/buy-status',
    },
    section: {
      list: PREFIX + '/course/sections',
      info: (id) => PREFIX + '/course/sections/' + id,
      times: (id) => PREFIX + '/course/sections/' + id + '/time',
    },
    feedback: {
      homework: (id) => PREFIX + '/course/homeworks/' + id,
      task: (id) => PREFIX + '/course/tasks/' + id,
      graduation: (id) => PREFIX + '/course/graduation_projects/' + id,
    },
    blog: {
      info: (id)=> PREFIX + '/blog/' + id,
    }
  }
}

export default webConfig;