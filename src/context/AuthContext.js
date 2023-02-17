import createDataContext from "./createDataContext.js";
import trackerApi from '../api/tracker.js'
import AsyncStorage from '@react-native-async-storage/async-storage';



const authReducer = (state, action) => {

  switch(action.type){
    case 'add_error':
      return {...state, errorMessage: action.payload}
    case 'signup':
      return {...state, token: action.payload}
    default:
      return state;
  }
}

// NOTE Action functions will go here 

const signUp = dispatch => async ({email, password}) =>{
    try {
      const response = await trackerApi.post('/signup', {email: email, password: password})
      // NOTE locally store token
      await AsyncStorage.setItem('token', response.data.token)
      // NOTE update our state
      dispatch({type: 'signup', payload: response.data.token})
      // NOTE navigate
      
    } catch (error) {
      // NOTE by supplying dispatch with a type and payload we can change our state based on certain circumstances
      dispatch({type: 'add_error', payload: `Something went wrong with signup`})
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
  {token: null, errorMessage: ''}
)