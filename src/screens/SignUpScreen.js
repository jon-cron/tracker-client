import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {Text, Input, Button} from 'react-native-elements'
// NOTE this is a utility class that provides margin to where ever it is place
import Spacer from "../components/Spacer.js";

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

// NOTE now using react-native-elements imports
return (
  <View style={styles.container}>
  <Spacer>
    <Text h3>Sign Up for Tracker</Text>
  </Spacer>
    <Input
      autoCapitalize="none"
      autoCorrect={false}
      label="Email"
      value={email}
      // onChangeText={(newEmail)=> setEmail(newEmail)}/>
      // NOTE or we can condense this statement down to this...
      onChangeText={setEmail}/>
  <Spacer/>
    <Input 
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry
      label="Password"
      value={password}
      onChange={setPassword}/>
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