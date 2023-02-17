import createDataContext from "./createDataContext.js";
import trackerApi from '../api/tracker.js'



const authReducer = (state, action) => {

  switch(action.type){

    default:
      return state;
  }
}

// NOTE Action functions will go here 

const signUp = dispatch => {
  return async ({email, password}) =>{
    try {
      const response = await trackerApi.post('/signup', {email: email, password: password})
      console.log(response.data)
    } catch (error) {
      dispatch({type: 'add_error', payload: `Something went wrong with signup`})
    }
  }
}
const signIn = (dispatch) => {
  return ({email, password}) =>{

  }
}
const signOut = (dispatch) => {
  return () =>{

  }
}



export const {Provider, Context} = createDataContext(
  authReducer,
  // NOTE any function I want triggered from other screens place in this object
  {signIn, signUp, signOut},
  {isSignedIn: false, errorMessage: ''}
)