import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={this.props.courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}


export default connect(mapStateToProps)(CoursesPage);
