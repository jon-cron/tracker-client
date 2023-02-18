import React from 'react';
import {StyleSheet } from 'react-native';
import { Text } from "react-native-elements";
import Map from "../components/Map.js";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer.js";


const TrackCreateScreen = () => {


return (
  <SafeAreaView forceInset={{top: "always"}}>
    <Spacer/>
    <Spacer>
    <Text h3>Create Track</Text>
    <Map/>
    </Spacer>
  </SafeAreaView>
)
};

const styles = StyleSheet.create({

});


export default TrackCreateScreen;