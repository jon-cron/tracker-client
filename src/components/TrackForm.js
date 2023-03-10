import React, {useContext} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {Input, Button} from 'react-native-elements'
import Spacer from "./Spacer.js";
import { Context as LocationContext } from "../context/LocationContext.js";
import useSaveTrack from "../hooks/useSaveTrack.js";

const TrackForm = () => {
  // NOTE we are bringing in functions and state that we wish to change through context
const {
  state: {name, recording, locations}, 
  startRecording, 
  stopRecording, 
  changeName
} = useContext(LocationContext);

const [saveTrack] = useSaveTrack()
return (
  <>
  <Spacer>
  <Input 
    placeholder="Enter Title"
    // NOTE if we didn't specify which state we would like above I would have had to set the value to "{state.name}"
    value={name}
    onChangeText={changeName}/>
    {recording 
    ? <Button title="Stop Recording" onPress={stopRecording}/> 
    : <Button title="Start Recording" onPress={startRecording}/>
    }
    <Spacer/>
    {!recording && locations.length > 0 ? <Button title="Save Track" onPress={saveTrack}/> : null}
  </Spacer>
  </>
)
};

const styles = StyleSheet.create({

});


export default TrackForm;