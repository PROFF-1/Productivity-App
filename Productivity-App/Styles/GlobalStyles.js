import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native"
import SignIn from "../Screens/SignIn";

import {  Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    
  },

  signinScreenContainer:{ 
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent:'flex-start'
  },

  homeScreenContainer:{
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent:'flex-start',
    paddingLeft:15
  },

  text:{
    color:'white',
    fontSize:35,
    fontWeight: 'bold'
  },

  textContainer:{
    display:'flex',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal:10

  },

  buttonContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  signInButton:{
    backgroundColor:'#1E90FF',
    paddingVertical:20,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 37,
    width: 350
  },

  buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize: 18
  },

  accountTypeButton:{
    width: '100%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderRadius: 37 ,
    marginTop: 20,
    paddingHorizontal:30,
    // paddingVertical:20
  
  },

  eachAccount:{
    backgroundColor:'black',
    paddingHorizontal:45,
    paddingVertical: 20,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderColor:'white',
    borderWidth: 2,
    borderRadius:40
  },

  headerText:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },

  header:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:20,
    marginTop:20
    
  },

  headerRight:{
    display:'flex',
    flexDirection:'row',
    width: 200,
    justifyContent:'space-between',
    marginRight: 50
  },

 

  input:{
    backgroundColor:'white',
    width:'100%',
    height:40,
    borderRadius: 30,
    paddingLeft: 15,
    marginRight: 10
  },

  profileContainer:{
    backgroundColor:'white',
    height:40,
    width: 40,
    borderRadius:'50%',
    alignItems:'center'
    
  },

  welcomeMessageContainer:{
    height: 90,
    width:'100%',
    marginTop: 10,
    paddingLeft: 60,
    backgroundColor:'blue'
    
  },

  welcomeMessage:{
    color:'white',
    fontSize:35,
    fontWeight: 'bold',
  },

  homeButtonsContainer:{
    width: 450,
    marginTop: 20,
    display: 'flex',
    flexDirection:'row',
    height: 50,
    alignItems:'center',
    paddingLeft: 30
    
  },

  overviewButton:{
    backgroundColor:'#1a1a1a',
    paddingVertical:10,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal: 40,
    borderRadius: 25,
    marginRight: 15
  },
  
  overview:{
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },

  productivity:{
    fontSize:18,
    color: '#4f4f4f',
    fontWeight:'bold',
  },

  productivityButton:{
    backgroundColor:'#1a1a1a',
    paddingVertical:10,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:20,
    borderRadius: 25,
    marginRight: 15
  },


  dailyProgressContainer:{
    backgroundColor:'#333',
    width:'380',
    height: 165,
    marginTop: 20,
    borderRadius: 15,
    paddingLeft: 20,
    paddingTop:19
  },

  dailyProgressTextContainer:{
    marginBottom: 13
  },

  dailyProgress:{
    color:'white',
    fontWeight:'bold',
    fontSize: 24
  },

  accessDailyProgressText:{
    color:'#c1c1c1',
    marginBottom: 10,
    fontWeight:'bold'
  },

  percentage:{
    color:'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5
  },

  flatListContainer:{
    width: 370,
    alignItems:'center',
    padding: 10,
    borderRadius: 15,
  },

  flatListItems:{
    backgroundColor:'#333',
    width:162,
    height: 165,
    padding:15,
    borderRadius: 15
  },

  progressCounter:{
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width: 130,

  },

  numberOfNew:{
    fontSize: 14,
    color: '#4f4f4f',
    marginBottom: 3,
    marginTop: 10
  },

  name:{
    marginBottom: 7,
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  },

  progressCounterContainer:{
    paddingHorizontal: 15,
    paddingVertical: 5,
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15
  },

  numberOfProgress:{
    fontWeight:'bold',
    color:'white',
    fontSize: 12
  },
  categories:{
    color:'white',
    fontWeight:'bold',
    fontSize: 20,
    marginTop: 24,
    marginBottom: 11,
  },




  // Existing styles from your app
  appContainer: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  welcomeMessageContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeMessage: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  homeButtonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  overviewButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 15,
  },
  productivityButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  overview: {
    fontSize: 16,
    fontWeight: '500',
  },
  productivity: {
    fontSize: 16,
    fontWeight: '500',
  },
  
  // New styles for productivity screen
  chartContainer: {
    backgroundColor: '#222',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  chart: {
    borderRadius: 15,
    marginVertical: 10,
  },
  averageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  averageLabel: {
    color: '#999',
    fontSize: 14,
  },
  averageValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  categoriesHorizontal: {
    paddingRight: 20,
  },
  categoryCard: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 15,
    width: screenWidth * 0.4,
    marginRight: 15,
  },
  categoryIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryIcon: {
    fontSize: 20,
  },
  categoryCount: {
    color: '#999',
    fontSize: 12,
    marginBottom: 5,
  },
  categoryName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryTotal: {
    color: '#999',
    fontSize: 12,
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  focusContainer: {
    backgroundColor: '#222',
    borderRadius: 15,
    padding: 15,
  },
  focusMetricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  focusMetric: {
    alignItems: 'center',
  },
  focusMetricValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  focusMetricLabel: {
    fontSize: 12,
    color: '#999',
  },
  startFocusButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  startFocusButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  taskItem: {
    flexDirection: 'row',
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  priorityIndicator: {
    width: 5,
    height: '80%',
    borderRadius: 3,
    marginRight: 10,
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  taskDeadline: {
    color: '#999',
    fontSize: 12,
  },
  taskCheckbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#1E90FF',
  },
});

  

