import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity } from 'react-native';
import {Text, Button, Input} from 'react-native-elements'
import Spacer from "./Spacer.js";


const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

return (
  <>
  <Spacer>
    <Text h3>{headerText}</Text>
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
      onChangeText={setPassword}/>
    <Spacer>
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
    <Button 
      title={submitButtonText}
      onPress={() => onSubmit({email:email, password: password})}/>
    </Spacer>
  </>
)
};

const styles = StyleSheet.create({
errorMessage:{
  fontSize: 16,
  color: 'red',
  marginLeft: 15,
  marginTop: 15
}
});


export default AuthForm;