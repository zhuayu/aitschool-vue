import userService from './user.js';
import planService from './plan.js';
import courseService from './course.js';
import sectionService from './section.js';




const Service = {
  user: userService,
  plan: planService,
  course: courseService,
  section: sectionService
}

export default Service;