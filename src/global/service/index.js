import userService from './user.js';
import planService from './plan.js';
import courseService from './course.js';
import sectionService from './section.js';
import blogService from './blog.js';

const Service = {
  user: userService,
  plan: planService,
  course: courseService,
  section: sectionService,
  blog: blogService
}

export default Service;