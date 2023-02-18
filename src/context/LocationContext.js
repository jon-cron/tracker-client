import createDataContext from "./createDataContext.js";


const locationReducer = (state, action) => {
  switch (action.type){
    case 'add_current_location':
      return {...state, currentLocation: action.payload}
    default:
      return state
  }
}

// SECTION action functions

const startRecording = dispatch => () => {
  
}
const stopRecording = dispatch => () => {

}
const addLocation = dispatch => (location) => {
  console.log('adding location')
dispatch({ type: 'add_current_location', payload: location})
}

export const {Context, Provider} = createDataContext(
  locationReducer,
  {startRecording, stopRecording, addLocation},
  {recording: false, locations: [], currentLocation: null}
)