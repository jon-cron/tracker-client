// NOTE anytime you want to use context from another file you must also import useContext from react
import React, {useContext} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {Text, Input, Button} from 'react-native-elements'
import AuthForm from "../components/AuthForm.js";
import NavLink from "../components/NavLink.js";
import { NavigationEvents } from "react-navigation";

// NOTE this is a utility class that provides margin to where ever it is place
import { Context as AuthContext } from "../context/AuthContext.js";

const SignUpScreen = ({navigation}) => {
  const {state, signUp, clearErrorMessage} = useContext(AuthContext)


  // NOTE this useEffect would automatically signin the user but would cause bad UI by showing the signup screen for a split second
  // useEffect(() => {
  //   tryLocalSignIn();
  // }, [])
// NOTE now using react-native-elements imports
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
    headerText="Sign up for Tracker"
    errorMessage={state.errorMessage}
    submitButtonText="Sign Up"
    onSubmit={({email, password}) => signUp({email, password})}
    />
    <NavLink 
    text="Already have an account? Sign in"
    routeName='SignIn'
    />
  </View>
)
};


// NOTE this will come in handy. Many login screens do not have a header
SignUpScreen.navigationOptions = () => {
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


export default SignUpScreen;