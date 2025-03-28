import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native"
import SignIn from "../Screens/SignIn";

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    
  },

  appContainer:{ 
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent:'flex-start'
  },

  homeScreenContainer:{
    flex: 1,
    backgroundColor: '#1a1a1a',
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
    width: '70%',
    justifyContent:'space-between'
  },
  input:{
    backgroundColor:'white',
    width:'80%',
    height:50,
    borderRadius: 30,
    paddingLeft: 15
  },

  profileContainer:{
    backgroundColor:'white',
    borderRadius:'50%'
    
  },

  welcomeMessageContainer:{
    height: 90,
    width:450,
    marginTop: 30,
    paddingLeft: 30
  },

  welcomeMessage:{
    color:'white',
    fontSize:35,
    fontWeight: 'bold'
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
    backgroundColor: '#1E90FF',
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
    marginLeft: 5,
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
    marginLeft: 5,
    padding: 10,
    backgroundColor:'#666',
    borderRadius: 15,
   height:500
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
    marginRight:250
  },

  
  

});
