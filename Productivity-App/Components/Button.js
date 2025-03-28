import { View, Text, TouchableOpacity, navigation } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../Styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';

export default function Button() {
  const navigation = useNavigation()
  return (
    <View style={GlobalStyles.buttonContainer}>
      
      <TouchableOpacity style={GlobalStyles.signInButton} onPress ={()=>navigation.navigate("Home")}>
        <Text style={GlobalStyles.buttonText}>Sign In with Email</Text>
      </TouchableOpacity>

      <View style={GlobalStyles.accountTypeButton}>
        <TouchableOpacity style={GlobalStyles.eachAccount}>
          <Text style={GlobalStyles.buttonText}> Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.eachAccount}>
          <Text style={GlobalStyles.buttonText}>Apple ID</Text>
        </TouchableOpacity> 
      </View> 
      
    </View>
    
  );
}

