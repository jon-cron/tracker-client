// FIXME come back and create a snippet for the app.js page so you don't have to write this out
import { StatusBar } from 'expo-status-bar';
// NOTE swtichNavigator is an abrupt navigator which is commonly used to switch from a login page
// NOTE use yarn add react-native-elements
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import SignUpScreen from './src/screens/SignUpScreen.js'
import SignInScreen from './src/screens/SignInScreen.js'
import AccountScreen from './src/screens/AccountScreen.js'
import TrackCreateScreen from './src/screens/TrackCreateScreen.js'
import TrackDetailScreen from './src/screens/TrackDetailScreen.js'
import TrackListScreen from './src/screens/TrackListScreen.js'

const switchNavigator = createSwitchNavigator({
loginFlow: createStackNavigator({
  Signup: SignUpScreen,
  SignIn: SignInScreen,
}),
// NOTE this bottom tab automatically assigns a page to a button. 
mainFlow: createMaterialBottomTabNavigator({
  trackListFlow: createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen,
  }),
  TrackCreate: TrackCreateScreen,
  Account: AccountScreen,
})
})
export default createAppContainer(switchNavigator)
