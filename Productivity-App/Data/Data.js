import { TouchableOpacity,View,Text,Image } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { GlobalStyles } from '../Styles/GlobalStyles';

export const data=[
  
    {
      icon:require("../assets/Icon-book-open.png"),
      name:'Book',
      numberOfNew:'5 new',
      progress:0.39, 
      color: '#1e90ff'   
    }
    
  ,
  {
    icon:require("../assets/Icon-archive.png"),
    name:'Emails',
    numberOfNew:'5 new',
    progress:0.15,
    color:'#ffab1e'    
  },
  {
    icon:require("../assets/Icon-check.png"),
    name:'Work',
    numberOfNew:'5 new',
    progress:0.12,
    color:'#bc62ff'    
  },
  {
    icon:require("../assets/Icon-bell.png"),
    name:'Urgent',
    numberOfNew:'5 new',
    progress:0.39,
    color:'#7fff62'    
  }
]


export const RenderItem=({item})=>{
  return(
    <View style={GlobalStyles.flatListItems}>
      <Image source={item.icon} style={{borderRadius:10}}/>
      <Text style={GlobalStyles.numberOfNew}>{item.numberOfNew}</Text>
      <Text style={GlobalStyles.name}>{item.name}</Text>
      <View  style ={GlobalStyles.progressCounter}><ProgressBar  progress={item.progress} 
      width={60} 
      height={5}
      color={item.color}
      borderColor={'none'}
      borderWidth={0}
      unfilledColor={'#7f7f7f'}/>
      <TouchableOpacity style={[GlobalStyles.progressCounterContainer, {backgroundColor: item.color}]}>
        <Text style={GlobalStyles.numberOfProgress}>
          {((item.progress/42)*1000).toFixed(0)}/24
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}