import { View, Text,StyleSheet,TextInput,Image, Touchable, TouchableOpacity, TouchableWithoutFeedback, FlatList, ScrollView,Dimensions,Platform, navigation} from 'react-native'
import React from 'react'
import { GlobalStyles } from '../Styles/GlobalStyles';
import ProgressBar from 'react-native-progress/Bar';
import {data} from "../Data/Data.js"
import {RenderItem} from "../Data/Data.js"
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
const profile= require("../assets/person.png");
const screenWidth = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';



export default function Home() {
  const navigation =useNavigation();
  const [activeButton, setActiveButton] = useState('overview');

   // Approach 1: Inline Conditional Styling
   const handlePress1 = (buttonType) => {
    setActiveButton(buttonType);
      buttonType === 'productivity'? navigation.navigate('Productivity'): navigation.navigate('Home');
  };

  const getButtonStyle = (buttonType) => {
    // Base styles from GlobalStyles
    const baseOverviewStyle = GlobalStyles.overviewButton;
    const baseProductivityStyle = GlobalStyles.productivityButton;

    // Active state styles
    const activeOverviewStyle = {
      ...baseOverviewStyle,
      backgroundColor: activeButton === buttonType ? '#1e90ff' : 'transparent'
    };

    const activeProductivityStyle = {
      ...baseProductivityStyle,
      backgroundColor: activeButton===buttonType ? '#1e90ff' : 'transparent'
    };

    return buttonType === 'overview' 
      ? activeOverviewStyle 
      : activeProductivityStyle;
  };

  // Dynamic text styles
  const getTextStyle = (buttonType) => {
    const baseOverviewText = GlobalStyles.overview;
    const baseProductivityText = GlobalStyles.productivity;

    const activeOverviewText = {
      ...baseOverviewText,
      color: activeButton === 'overview' ? 'white' : '#4f4f4f'
    };

    const activeProductivityText = {
      ...baseProductivityText,
      color: activeButton === 'productivity' ? 'white' : '#4f4f4f'
    };

    return buttonType === 'overview'
      ? activeOverviewText
      : activeProductivityText;
  };

 
  return (
    <View style= {GlobalStyles.appContainer}>
    <ScrollView contentContainerStyle={
      {width:Platform.OS==='ios'? screenWidth : '100%' }
    }
     nestedScrollEnabled={true}
    >
      {/* <View  style={GlobalStyles.header}>
        <Text style={GlobalStyles.headerText}>Home</Text>
        <View  style={GlobalStyles.headerRight}>
          <TextInput
          placeholder='Search.....'
          style={GlobalStyles.input}
          />
          <View style={GlobalStyles.profileContainer}>
            <Image source={profile}
            />
          </View>
        </View>
      </View> */}
      <View style={GlobalStyles.welcomeMessageContainer}>
        <View>
          <Text  style={GlobalStyles.welcomeMessage}>Hello</Text>
        </View>
        <View>
          <Text style={GlobalStyles.welcomeMessage}>Richmond Nyamedor</Text>
        </View>
      </View>
      <View style={GlobalStyles.homeButtonsContainer}>
        <TouchableOpacity style={getButtonStyle('overview')} onPress={()=>handlePress1('overview')}>
          <Text style={getTextStyle('overview')}>Overview</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={[GlobalStyles.productivityButton,
          {
            backgroundColor : isPressed ? '#1e90ff' : 'none',

          }
        ]}
          onPress={handlePress1}
        >
          <Text style={[GlobalStyles.productivity,
            {
              color: isPressed? 'white' : '#4f4f4f',
            }
          ]}
           onPress={handlePress1}
          >Productivity</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={[,GlobalStyles.productivityButton,getButtonStyle('productivity')]}
          onPress={()=>handlePress1('productivity')}
        >
          <Text style={getTextStyle('productivity')}>Productivity</Text>
        </TouchableOpacity>
        
      </View>
      <View style ={GlobalStyles.dailyProgressContainer}>
        <View style={GlobalStyles.dailyProgressTextContainer}>
          <Text  style={GlobalStyles.dailyProgress}>Daily Progress</Text>
        </View>
        <View>
          <Text style={GlobalStyles.accessDailyProgressText}>Here you can see you daily task</Text>
          <Text style={GlobalStyles.percentage}>76%</Text>
          <ProgressBar 
            progress={0.78} 
            width={350} 
            height={5}
            borderColor={'none'}
            borderWidth={0}
            color={'#1E90FF'}
            unfilledColor={'#7f7f7f'}/>
        </View>    
      </View>
    
        <Text style ={GlobalStyles.categories}>
          Categories
        </Text>
        <View style={GlobalStyles.flatListContainer}>
          <FlatList
            data={data}
            renderItem={RenderItem}
            keyExtractor={(item)=>item.name}
            vertical
            numColumns={2}
            key={2}
            columnWrapperStyle={{ gap: 20, marginBottom: 20 }}          
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            />
        </View>
        </ScrollView>
    </View>
  );
}