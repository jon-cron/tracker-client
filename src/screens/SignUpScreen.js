// NOTE anytime you want to use context from another file you must also import useContext from react
import React, {useState, useContext} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {Text, Input, Button} from 'react-native-elements'
import AuthForm from "../components/AuthForm.js";
import NavLink from "../components/NavLink.js";
// NOTE this is a utility class that provides margin to where ever it is place
import { Context as AuthContext } from "../context/AuthContext.js";

const SignUpScreen = ({navigation}) => {
  const {state, signUp} = useContext(AuthContext)

// NOTE now using react-native-elements imports
return (
  <View style={styles.container}>
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