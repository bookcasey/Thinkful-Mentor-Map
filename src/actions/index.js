import fetch from 'isomorphic-fetch'
import  { API_URL } from './../config'

export const RECIEVE_MENTORS = 'RECIEVE_MENTORS'
export const REQUEST_MENTORS = 'REQUEST_MENTORS'

const requestMentors = () => {
  return {
    type: REQUEST_MENTORS
  }
}

const recieveMentors = (mentors) => {
  return {
    type: RECIEVE_MENTORS,
    mentors,
    receivedAt: Date.now()
  }
}

export const fetchMentors = () => {
  return dispatch => {
    dispatch(requestMentors())
    return fetch(API_URL)
      .then(response => response.json())
      .then(data => dispatch(recieveMentors(data.mentors)))
  }
}

export const onMarkerClick = (marker) => {
  console.log("Marker is:", marker);
  return {
    type: REQUEST_MENTORS
  }
}
