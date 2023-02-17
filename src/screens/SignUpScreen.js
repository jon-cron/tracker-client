import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


const SignUpScreen = ({navigation}) => {


return (
  <>
    <Text>SignUpScreen</Text>
    <Button title="I already have an account"
    onPress={()=>{
      navigation.navigate('SignIn')
    }}
    />
    <Button title="Go to main flow"
    onPress={()=>{
      navigation.navigate('mainFlow')
    }}
    />
  </>
)
};

const styles = StyleSheet.create({

});


export default SignUpScreen;