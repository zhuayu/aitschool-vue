const Home = resolve => require(['@/pages/Home/Home'], resolve)
const Plan = resolve => require(['@/pages/Plan/Plan'], resolve)
const Course = resolve => require(['@/pages/Course/Course'], resolve)
const NotFound = resolve => require(['@/pages/Common/404'], resolve)

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/plan/:id',
    name: 'Plan',
    component: Plan
  },
  {
    path: '/course/:id',
    name: 'Course',
    component: Course
  },
  {
    path: '*',
    name: 'not_found',
    component: NotFound
  }
]