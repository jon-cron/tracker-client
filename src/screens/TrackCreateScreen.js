import React, {useContext} from 'react';
import {StyleSheet } from 'react-native';
import { Text } from "react-native-elements";
import Map from "../components/Map.js";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer.js";
import '../_mockLocation.js'
import { Context as LocationContext } from "../context/LocationContext.js";
import useLocation from "../hooks/useLocation.js";


const TrackCreateScreen = () => {
  const {addLocation} = useContext(LocationContext)

const [error] = useLocation((location) => addLocation(location))



return (
  <SafeAreaView forceInset={{top: "always"}}>
    <Spacer/>
    <Spacer>
    <Text h3>Create Track</Text>
    <Map/>
    {error? <Text>Please enable location services</Text> : null}
    </Spacer>
  </SafeAreaView>
)
};

const styles = StyleSheet.create({

});


export default TrackCreateScreen;