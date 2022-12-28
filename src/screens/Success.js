import { View, Text,Image ,StyleSheet,TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';

export default function App() {
  return (
<View  style={{height:'100%',width:'100%'}}>
         <ImageBackground source={require('../assets/bg.png')} 
          style={{height:'100%',width:'100%'}}>
        
         <TouchableOpacity activeOpacity={0.7} style={styles.book} >
         <Text style={{fontSize:25,alignSelf: 'center',color:'white',marginTop:5,fontWeight:'bold'}}>Download Bill</Text>
         </TouchableOpacity>
 
        </ImageBackground >
</View>  
  )
}
const styles = StyleSheet.create({
  book:{
    height:45,
    width:'80%',
    borderRadius:5,
    backgroundColor:'#75c31e',
    alignSelf: 'center',
    marginTop:'165%',
    marginBottom:10
  }
})