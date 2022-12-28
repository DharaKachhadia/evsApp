import React,{useEffect} from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image,StatusBar, BackHandler,Alert} from 'react-native'
import Toast from 'react-native-toast-message';

const Service = (props) => {

//backbutton

  function handleBackButtonClick() {
   props.navigation.navigate('Drawer1');
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

//main return

    return (
          <View style={styles.container}>
          <StatusBar hidden/>
          <View style={styles.container1}>
          <Toast ref={(ref)=>{Toast.setRef(ref)}}/>
          <TouchableOpacity onPress={()=>{props.navigation.replace('Drawer1')}}>
          <Text style={styles.text}>Back</Text>        
          </TouchableOpacity>
          <View style={{ flex:1,justifyContent: 'center',alignItems: 'center',marginTop:-70}}>
          <Text style={styles.text1}>Services</Text>
          </View>
         
          </View>  
          <View style={{ flexDirection:'row' ,flex:1,justifyContent: 'center',alignItems: 'center', marginTop:-20}}>
          <TouchableOpacity onPress={()=>{props.navigation.replace('Drawer1')}}><Image style={{ height:230,width:170 , marginRight:10,marginLeft:23,borderRadius:20 }} source={require('../images/chargingg.png')}/></TouchableOpacity>
          <TouchableOpacity onPress={()=>{ Toast.show({
              position:'bottom',
              type: 'error',
              text1:'This Services Now Not Available',
              text2:'it will be avilable in feature',
              visibilityTime:2000,
              size: 'auto',
            })
            }}>
            <Image style={{ height:210,width:170 , borderRadius:10 }} source={require('../images/garage.png')}/></TouchableOpacity>
          </View>
          <View style={{ flexDirection:'row' ,flex:1,justifyContent: 'center',alignItems: 'center', marginTop:-110}}>
          <TouchableOpacity  onPress={()=>{props.navigation.navigate('petrolpump')}}
          // onPress={()=>{ Toast.show({
          //     position:'bottom',
          //     type: 'error',
          //     text1:'This Services Now Not Available',
          //     text2:'it will be avilable in feature',
          //     visibilityTime:2000,
          //     size: 'auto',
          //   })
          //   }}
            ><Image style={{ height:210,width:170 , marginRight:10,marginLeft:23,borderRadius:10 }} source={require('../images/petrolpump.png')}/></TouchableOpacity>
          <TouchableOpacity  
           onPress={()=>{ Toast.show({
              position:'bottom',
              type: 'error',
              text1:'This Services Now Not Available',
              text2:'it will be avilable in feature',
              visibilityTime:2000,
              size: 'auto',
            })
            }}
            ><Image style={{ height:210,width:170 , borderRadius:10 }} source={require('../images/shoping.png')}/></TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
      fontSize:20,
      marginTop:10,
      marginLeft:20,
      color:'white',
      fontWeight:'bold',
    },
    text1:{
        fontSize:30, 
        color:'white',
        fontWeight:'bold',      
      },
    
    container: {
       height:'100%',
       width:'100%',
  
    },
    container1: {
        height:'20%',
       width:'100%',
       backgroundColor:'#75C31E'
    },
})

export default Service
