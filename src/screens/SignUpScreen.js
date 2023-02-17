import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Text, Input, Button} from 'react-native-elements'
// NOTE this is a utility class that provides margin to where ever it is place
import Spacer from "../components/Spacer.js";

const SignUpScreen = ({navigation}) => {
// NOTE now using react-native-elements imports
return (
  <View style={styles.container}>
  <Spacer>
    <Text h3>Sign Up for Tracker</Text>
  </Spacer>
    <Input label="Email"/>
  <Spacer/>
    <Input label="Password"/>
    <Spacer>
    <Button title="SignUp"/>
    </Spacer>
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
}
});


export default SignUpScreen;