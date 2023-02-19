import createDataContext from "./createDataContext.js";


const locationReducer = (state, action) => {
  switch (action.type){
    case 'add_current_location':
      return {...state, currentLocation: action.payload}
    case 'start-recording':
      return {...state, recording: true}
    case 'stop-recording':
      return {...state, recording: false}
    default:
      return state
  }
}

// SECTION action functions

const startRecording = dispatch => () => {
  dispatch({type: 'start_recording'})
}
const stopRecording = dispatch => () => {
  dispatch({type: 'stop-recording'})
}
const addLocation = dispatch => (location, recording) => {
  // console.log('adding location')
dispatch({ type: 'add_current_location', payload: location})
}

export const {Context, Provider} = createDataContext(
  locationReducer,
  {startRecording, stopRecording, addLocation},
  {recording: false, locations: [], currentLocation: null}
)