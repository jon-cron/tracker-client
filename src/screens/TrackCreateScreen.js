import React, {useContext, useCallback} from 'react';
import {StyleSheet } from 'react-native';
import { Text } from "react-native-elements";
import Map from "../components/Map.js";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Spacer from "../components/Spacer.js";
import '../_mockLocation.js'
import { Context as LocationContext } from "../context/LocationContext.js";
import useLocation from "../hooks/useLocation.js";
import TrackForm from "../components/TrackForm.js";

// NOTE 'isFocused' comes from withNavigation focus which will flip a boolean whether the page is in focus or not
const TrackCreateScreen = ({isFocused}) => {
  const { state: {recording}, addLocation} = useContext(LocationContext)
  const callback = useCallback(location => {
    addLocation(location, recording);
  }, [recording])
const [error] = useLocation(isFocused || recording, callback)

// console.log(isFocused)

return (
  <SafeAreaView forceInset={{top: "always"}}>
    <Spacer/>
    <Spacer>
    <Text h3>Create Track</Text>
    <Map/>
    {error? <Text>Please enable location services</Text> : null}
    </Spacer>
    <TrackForm/>
  </SafeAreaView>
)
};

const styles = StyleSheet.create({

});


export default withNavigationFocus(TrackCreateScreen);