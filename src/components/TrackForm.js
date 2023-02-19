import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {Input, Button} from 'react-native-elements'
import Spacer from "./Spacer.js";


const TrackForm = ({navigation}) => {


return (
  <>
  <Spacer>
  <Input placeholder="Enter Title"/>
  <Button title="Start Recording"/>
  </Spacer>
  </>
)
};

const styles = StyleSheet.create({

});


export default TrackForm;