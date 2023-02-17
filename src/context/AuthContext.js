import createDataContext from "./createDataContext.js";



const authReducer = (state, action) => {

  switch(action.type){

    default:
      return state;
  }
}

// NOTE Action functions will go here 




export const {Provider, Context} = createDataContext(
  authReducer,
  {},
  {isSignedIn: false}
)