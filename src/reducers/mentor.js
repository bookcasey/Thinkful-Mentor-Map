const initialState = {
  mentors: [],
  isFetching: false
}

const mentor = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_MENTORS':
      return {
          ...state,
          isFetching: true
        }
    case 'RECIEVE_MENTORS':
       return {
         ...state,
        isFetching: false,
        mentors: action.mentors,
        lastUpdated: action.receivedAt
       }
    default:
      return state
  }
}

export default mentor
