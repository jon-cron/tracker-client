import createDataContext from "./createDataContext.js";


const locationReducer = (state, action) => {
  switch (action.type){
    default:
      return state
  }
}

// SECTION action functions

const startRecording = dispatch => () => {
  
}
const stopRecording = dispatch => () => {

}
const addLocation = dispatch => () => {

}

export const {Context, Provider} = createDataContext(
  locationReducer,
  {startRecording, stopRecording, addLocation},
  {recording: false, locations: [], currentLocation: null}
)