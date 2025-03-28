import { View, Text,Image,StyleSheet,navigation } from 'react-native'
import React from 'react'
const Icon = require("../assets/SignInIcon.png");
import { GlobalStyles } from '../Styles/GlobalStyles';
import Button from '../Components/Button';
import { useNavigation } from '@react-navigation/native';


export default function SignIn() {

  const navigation = useNavigation
  return (
    <View  style={GlobalStyles.appContainer}>
      <Image
       source={Icon}
       style={GlobalStyles.signInIcon}
      />
      <View style={GlobalStyles.textContainer}>
        <Text style={GlobalStyles.text} >
          The only productivity 
        </Text>
        <Text style={GlobalStyles.text}>
        app you need
        </Text>
      </View>
      <Button/>
    </View>
  )
}