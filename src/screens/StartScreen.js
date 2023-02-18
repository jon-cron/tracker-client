import React, {useEffect, useContext} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from "../context/AuthContext.js";

const StartScreen = ({navigation}) => {
const {tryLocalSignIn} = useContext(AuthContext)

useEffect(() => {
  tryLocalSignIn();
}, [])

return null
};
export default StartScreen;