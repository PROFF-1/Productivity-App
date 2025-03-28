// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,StatusBar,Image} from 'react-native';
import SignIn from './Screens/SignIn';
import Home from './Screens/Home';
import {GlobalStyles} from "./Styles/GlobalStyles";
import{ NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // <SafeAreaView style={GlobalStyles.container}>
    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName='SignIn'>
    //       <Stack.Screen name="SignIn"  component={SignIn}/>
    //       <Stack.Screen name="Home" component={Home}/>
    //     </Stack.Navigator>
    //   </NavigationContainer>
      
    //   {/* <SignIn/> */}
    //    {/* <Home/> */}
    //   <StatusBar barStyle="light-content" />
    // </SafeAreaView>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='SignIn'>
          <Stack.Screen name="SignIn"  component={SignIn}/>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
      
      {/* <SignIn/> */}
       {/* <Home/> */}
      <StatusBar barStyle="light-content" />
      </NavigationContainer>

  );
  
}
