import createDataContext from "./createDataContext.js";
import trackerApi from '../api/tracker.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../utility/navigationRef.js";


const authReducer = (state, action) => {

  switch(action.type){
    case 'add_error':
      return {...state, errorMessage: action.payload}
    case 'signin':
      return {...state, token: action.payload}
    case 'clear_error_message':
      return {...state, errorMessage: ''}
    case 'signout':
      return {token: null, errorMessage: ''}
    default:
      return state;
  }
}

// NOTE Action functions will go here 

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if(token) {
    dispatch({ type: 'signin', payload: token});
    navigate('TrackList')
  } else {
    navigate('Signup')
  }
}

  const clearErrorMessage = dispatch => () => {
    dispatch({
      type: 'clear_error_message',
    })
  }

const signUp = dispatch => async ({email, password}) =>{
    try {
      const response = await trackerApi.post('/signup', {email: email, password: password})
      // NOTE locally store token
      await AsyncStorage.setItem('token', response.data.token)
      console.log('Success', response.data.token)
      // NOTE update our state
      dispatch({type: 'signin', payload: response.data.token})
      console.log('Success')
      // NOTE navigate
      navigate('TrackList')
      console.log('navigating')
    } catch (error) {
      // NOTE by supplying dispatch with a type and payload we can change our state based on certain circumstances
      dispatch({type: 'add_error', payload: `Something went wrong with signup`})
    }
  }

const signIn = (dispatch) => async ({email, password}) =>{
    try {
      const response = await trackerApi.post('/signin', {email: email, password: password})
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({
        type: 'signin',
        payload: response.data.token
      })
      navigate('TrackList')
    } catch (error) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with signin'
      })
    }
  }

const signOut = (dispatch) => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({type:'signout'});
    navigate('loginFlow')
  }




export const {Provider, Context} = createDataContext(
  authReducer,
  // NOTE any function I want triggered from other screens place in this object
  {signIn, signUp, signOut, clearErrorMessage, tryLocalSignIn},
  {token: null, errorMessage: ''}
)