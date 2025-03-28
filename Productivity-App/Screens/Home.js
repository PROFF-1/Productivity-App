import { View, Text,StyleSheet,TextInput,Image, Touchable, TouchableOpacity, TouchableWithoutFeedback, FlatList, ScrollView} from 'react-native'
import React from 'react'
import { GlobalStyles } from '../Styles/GlobalStyles';
import ProgressBar from 'react-native-progress/Bar';
import {data} from "../Data/Data.js"
import {RenderItem} from "../Data/Data.js"
import { SafeAreaView } from 'react-native-safe-area-context';
const profile= require("../assets/person.png");

export default function Home() {
  
  return (
    <SafeAreaView style= {GlobalStyles.appContainer}>
    <ScrollView
    >
      <View  style={GlobalStyles.header}>
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
      </View>
      <View style={GlobalStyles.welcomeMessageContainer}>
        <View>
          <Text  style={GlobalStyles.welcomeMessage}>Hello</Text>
        </View>
        <View>
          <Text style={GlobalStyles.welcomeMessage}>Richmond Nyamedor</Text>
        </View>
      </View>
      <View style={GlobalStyles.homeButtonsContainer}>
        <TouchableOpacity style={GlobalStyles.overviewButton}>
          <Text style={GlobalStyles.overview}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.productivityButton}>
          <Text style={GlobalStyles.productivity}>Productivity</Text>
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
    </SafeAreaView>
  );
}