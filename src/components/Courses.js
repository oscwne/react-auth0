import React, { Component } from 'react';

class Courses extends Component {
  state = {
    courses: []
  };

  componentDidMount() {
    fetch('/courses', {
      headers: {
        Authorization: `Bearer ${this.props.auth.getAccessToken()}`
      }
    })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Error fetching courses');
      })
      .then(response => this.setState({ courses: response.courses }))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <ul>
        {this.state.courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    );
  }
}

export default Courses;
