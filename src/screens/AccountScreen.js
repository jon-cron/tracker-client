import React, {useContext} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from "react-native-elements";
import Spacer from './../components/Spacer.js'
import {Context as AuthContext} from './../context/AuthContext.js'
import { SafeAreaView } from "react-navigation";


const AccountScreen = () => {
  const {signOut} = useContext(AuthContext)

return (
  <SafeAreaView forceInset={{top: 'always'}}>
    <Spacer>
    <Text style={{fontSize: 48}}>AccountScreen</Text>
    </Spacer>
    <Spacer>
    <Button title="Sign out"
    onPress={signOut}
    />
    </Spacer>
    </SafeAreaView>
)
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // justifyContent: "center",
    marginTop: 100
  },
});


export default AccountScreen;