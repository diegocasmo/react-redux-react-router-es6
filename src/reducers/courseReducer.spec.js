import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should add course when passed "CREATE_COURSE_SUCCESS"', () => {
    const initialState = [{title: 'a'}, {title: 'b'}];
    const newCourse = {title: 'c'};
    const action = actions.createCourseSuccess(newCourse);

    const newState = courseReducer(initialState, action);
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('a');
    expect(newState[1].title).toEqual('b');
    expect(newState[2].title).toEqual('c');
  });

  it('should update course when passed "UPDATE_COURSE_SUCCESS"', () => {
    const initialState = [{id: 'a', title: 'a'}, {id: 'b', title: 'b'}, {id: 'c', title: 'c'}];
    const course = {id:'b', title: 'new title'};
    const action = actions.updateCourseSuccess(course);

    const newState = courseReducer(initialState, action);
    const updateCourse = newState.find(a => a.id === course.id);
    const untouchedCourse = newState.find(a => a.id === 'a');

    expect(updateCourse.title).toEqual('new title');
    expect(untouchedCourse.title).toEqual('a');
    expect(newState.length).toEqual(3);
  });
});
