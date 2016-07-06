import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
  return function(dispatch) {
    return CourseApi.getAllCourses()
      .then(courses => { dispatch(loadCoursesSuccess(courses)); })
      .catch(error => { throw(error); });
  };
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function saveCourse(course) {
  return function(dispatch) {
    return CourseApi.saveCourse(course)
      .then(savedCourse => {
        if (course.id) {
          dispatch(updateCourseSuccess(savedCourse));
        } else {
          dispatch(createCourseSuccess(savedCourse));
        }
      })
      .catch(error => { throw(error); });
  };
}
