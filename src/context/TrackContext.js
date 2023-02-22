import createDataContext from "./createDataContext.js";
import trackerApi from "../api/tracker.js";

const trackReducer = (state, action) => {
  switch(action.type){
    default:
      return state
  }
}

const getTracks = dispatch => () => {}
const postTrack = dispatch => async (name, locations) => {
  console.log(name, locations)
  const res = await trackerApi.post('/tracks', {name: name, locations: locations})
  console.log('logging res',res.data)
}

// NOTE Exports should export the reducer, action functions, and state objects.
// NOTE the first thing you should do after exporting context, provider is importing the provider in the app.js
export const {Provider, Context} = createDataContext(
  trackReducer,
  {getTracks, postTrack},
  []
)