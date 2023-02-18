import React, {useContext} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AuthForm from "../components/AuthForm.js";
import NavLink from "../components/NavLink.js";
import { Context as AuthContext } from "../context/AuthContext.js";
import { NavigationEvents } from "react-navigation";

const SignInScreen = () => {
  const {state, signIn, clearErrorMessage} = useContext(AuthContext)
  
  return (
    <View style={styles.container}>
      {/* NOTE place NavigationEvents within the return to invoke their actions */}
      <NavigationEvents
      // NOTE this happens as soon as we are successfully away from the page 
      // FIXME onDidBlur is slightly buggy. Try not to use it.
      // onDidBlur={}
      // NOTE this happens the second we navigate away from a page
      // onWillBlur={}
      // NOTE this happens after we successfully navigate to this screen 
      // onDidFocus={}
      // NOTE this happens the instant an action happens to come to this page
      onWillFocus={clearErrorMessage}/>

  <AuthForm
  headerText="Sign in to Tracker"
  errorMessage={state.errorMessage}
  onSubmit={({email, password}) => signIn({email, password})}
  submitButtonText="Signin"
  />
  <NavLink
  routeName='Signup'
  text="Need an account? Sign up"
  />
  </View>
)
};
SignInScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  },
});


export default SignInScreen;