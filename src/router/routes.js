const Home = resolve => require(['@/pages/Home/Home'], resolve)
const Blog = resolve => require(['@/pages/Blog/Blog'], resolve)
const LoginCallbackGithub = resolve => require(['@/pages/Login/Github'], resolve)
const Plan = resolve => require(['@/pages/Plan/Plan'], resolve)
const Course = resolve => require(['@/pages/Course/Course'], resolve)
const Section = resolve => require(['@/pages/Section/Section'], resolve)
const NotFound = resolve => require(['@/pages/Common/404'], resolve)

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login/oauth/callback/github',
    name: 'LoginCallbackGithub',
    component: LoginCallbackGithub
  },
  {
    path: '/blog/:id',
    name: 'Blog',
    component: Blog
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
    path: '/course/:course_id/:chapter_id/:section_id',
    name: 'Section',
    component: Section
  },
  {
    path: '*',
    name: 'not_found',
    component: NotFound
  }
]