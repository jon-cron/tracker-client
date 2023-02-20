import createDataContext from "./createDataContext.js";


const trackReducer = (state, action) => {
  switch(action.type){
    default:
      return state
  }
}

const getTracks = dispatch => () => {}
const postTrack = dispatch => () => {}

// NOTE Exports should export the reducer, action functions, and state objects.
// NOTE the first thing you should do after exporting context, provider is importing the provider in the app.js
export const {Provider, Context} = createDataContext(
  trackReducer,
  {getTracks, postTrack},
  []
)