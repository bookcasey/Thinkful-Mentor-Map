import $ from "jquery"

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
    return $.getJSON("https://www.thinkful.com/api/mentors", json =>
      console.log(json)
    )
  }
}

export const onMarkerClick = (marker) => {
  console.log("Marker is:", marker);
  return {
    type: REQUEST_MENTORS
  }
}
