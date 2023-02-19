import createDataContext from "./createDataContext.js";


const locationReducer = (state, action) => {
  switch (action.type){
    case 'add_current_location':
      return {...state, currentLocation: action.payload}
    case 'start-recording':
      return {...state, recording: true}
    case 'stop-recording':
      return {...state, recording: false}
    case 'add_location':
      return {...state, locations: [...state.locations, action.payload]}
    case 'change_name':
      return {...state, name: action.payload}
    default:
      return state
  }
}

// SECTION action functions
const changeName = dispatch => (name) => {
  dispatch({type: 'change_name', payload: name})
}
const startRecording = dispatch => () => {
  dispatch({type: 'start_recording'})
}
const stopRecording = dispatch => () => {
  dispatch({type: 'stop-recording'})
}
const addLocation = dispatch => (location, recording) => {
  // console.log('adding location')
dispatch({ type: 'add_current_location', payload: location});
if(recording){
  dispatch({type: 'add_location', payload: location})
}
}

export const {Context, Provider} = createDataContext(
  locationReducer,
  // NOTE these are the functions we export so that other files can have access
  {startRecording, stopRecording, addLocation, changeName},
  // NOTE this section are the types of state we use to change through the functions above
  {name: '', recording: false, locations: [], currentLocation: null}
)