import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


const TrackListScreen = ({navigation}) => {


return (
  <>
    <Text>TrackListScreen</Text>
    <Button title="Go to detail screen"
    onPress={()=>{
      navigation.navigate('TrackDetail')
    }}
    />
  </>
)
};

const styles = StyleSheet.create({

});


export default TrackListScreen;