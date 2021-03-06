import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js';


Vue.use(Router)

const appRouter = new Router({
  mode: 'history',
  routes: routes
})

export default appRouter;
