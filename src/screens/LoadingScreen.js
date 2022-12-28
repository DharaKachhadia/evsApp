import React,{useEffect} from 'react';
import { Button,TextInput } from 'react-native-paper';
import { 
    ActivityIndicator,
     View,
     StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingScreen = (props) => {

  const detectLogin=async()=>{
    const token = await AsyncStorage.getItem('token')
    if(token){
       props.navigation.replace("LogOut")
    }else{
      props.navigation.replace("HomeScreen")
    }
  }
   useEffect(()=>{
   detectLogin()
 },[])

  return (
    <View style={styles.Loading}> 
      <ActivityIndicator size="large" color="green"/>
    </View>
  );
};
const styles = StyleSheet.create({
    Loading:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
     }
  })
export default LoadingScreen;
