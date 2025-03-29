// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,StatusBar,Image, TouchableOpacity,TextInput} from 'react-native';
import SignIn from './Screens/SignIn';
import Home from './Screens/Home';
import Productivity from './Screens/Poductivity';
import {GlobalStyles} from "./Styles/GlobalStyles";
import{ NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const profile= require("./assets/person.png");


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
          <Stack.Screen name="SignIn"  component={SignIn}
           options={
            {
              title:'',
              headerStyle:{
                backgroundColor:'#1a1a1a'
              },
              headerTintColor:'white',
              headerTitleStyle:{
                color:'white',
                fontWeight: 'bold'
              },
  
              
            }
           }
          />
          <Stack.Screen name="Home" component={Home}
          options={{
            title: '',
            headerStyle:{
              backgroundColor:'#1a1a1a',
              height : 20
            },
            headerTintColor:'white',
            headerTitleStyle:{
              color:'white',
              fontWeight: 'bold'
            },

            headerRight:()=>(
              <TouchableOpacity>
                 <View  style={GlobalStyles.headerRight}>
                     <TextInput
                        placeholder='Search.....'
                        style={GlobalStyles.input}
                        />
                        <View style={GlobalStyles.profileContainer}>
                          <Image source={profile}
                           style={{
                            height: 35,
                            width: 35
                           }}
                          />
                        </View>
                  </View>
              </TouchableOpacity>
                )
            }}
          />
          <Stack.Screen name={'Productivity'} component={Productivity}/>
        </Stack.Navigator>
      
      {/* <SignIn/> */}
       {/* <Home/> */}
      <StatusBar barStyle="light-content" />
      </NavigationContainer>

  );
  
}
