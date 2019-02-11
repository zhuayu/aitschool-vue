const Home = resolve => require(['@/pages/Home/Home'], resolve)
const Plan = resolve => require(['@/pages/Plan/Plan'], resolve)
const NotFound = resolve => require(['@/pages/Common/404'], resolve)

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/plan',
    name: 'Plan',
    component: Plan
  },
  {
    path: '*',
    name: 'not_found',
    component: NotFound
  }
]