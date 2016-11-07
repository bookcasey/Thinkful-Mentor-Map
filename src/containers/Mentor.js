import React, { Component } from 'react'
import { connect } from 'react-redux'
import MentorView from '../components/MentorView'
import { fetchMentors } from '../actions'

class Mentor extends Component {

  componentDidMount() {
    this.props.fetchMentors()
  }

  render() {
    return (
      <MentorView {...this.props}/>
    );
  }
}

export default connect(
  state => ({
    mentors: state.mentor.mentors,
    loading: state.mentor.isFetching
  }),
  { fetchMentors }
)(Mentor)
