import React,{useState} from 'react';
import { View, StatusBar,StyleSheet,Image,Text,TouchableOpacity,TextInput,Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';


const Forget = (props) => {  
  const[MobileNo,setMobileNo] = useState('');
  const Phone = "+91"+MobileNo
  const sendCred=async(props)=>{


    fetch(`http://evspoint.com/api/sendOtp/${Phone}`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    })


    .then(async()=>{
      try{  
        if(MobileNo.length === 0){
          Toast.show({
            position:'Top',
            type: 'error',
            text1:' ! Please Enter Mobile ',
            visibilityTime:3000,
            size: 'auto',
          })
         }
        else{
        props.navigation.replace("Otp",{MobileNo})    
        }
      }catch(error){


        console.log(error.message);
      }
    })


   }
    return (
    <View style={styles.container}>
         <Toast ref={(ref)=>{Toast.setRef(ref)}}/>
        <TouchableOpacity  onPress={()=>{props.navigation.replace('HomeScreen')}}>
        <MaterialIcons name="reply" type="MaterialIcons" size={35} color="white" style={{marginTop:10}}/>
        </TouchableOpacity>    
        <StatusBar hidden/>


        <Image style={styles.Image} source={require('../images/logo.png')}/>


        <View style={styles.text}>
            <Text style={{fontSize:30, fontFamily :"bold", color: 'white'}}>Reset Password</Text>
        </View>


        <View style={styles.container1}>


           <View style={styles.text5}>
               <Text style={{fontSize:25,fontFamily:"bold", color: '#454545'}}>Enter Mobile No</Text>
           </View>


               <View style={styles.input1}>
               <MaterialIcons name="call" type="MaterialIcons" size={25} color="#75C31E" />
               <TextInput
                placeholder="Enter Mobile Number"
                placeholderTextColor='black'
                onChangeText={(text)=>setMobileNo(text)}
                color="black"
                />
               </View>


              <View style={{height: 50}}>
              <TouchableOpacity style={[styles.btn,{backgroundColor: '#75C31E',}]}
               onPress={() => sendCred(props)} >
              <Text style={{fontWeight: 'bold', fontSize: 15 , color: 'white'}}>SUBMIT</Text>
              </TouchableOpacity>
              </View>
              </View>
              </View>
           )
 }


 const styles = StyleSheet.create({
     text5:{
         marginTop:50,
         marginLeft:44
        },
         Image:{
             width:220,
             height: 60,
             marginLeft: 90,
             marginRight:90,
             marginTop: 90,
             justifyContent: 'center',
             alignItems: 'center'
            },
            container: {
                flex: 1,
                backgroundColor: '#75C31E',
            },
           container1: {
               backgroundColor: 'white',
               height: '100%',
               borderTopLeftRadius:60,
               marginTop: '20%',
            },
            text:
            {
                marginBottom:-40,
                marginTop:40,
                marginLeft:90,


            },
            btn: {
                flex: 1,
                height: 30,
                borderRadius: 10,
                marginTop:150,
                marginBottom:-150,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft:40,
                marginRight:40
            },
                input1: {
                    borderColor: 'black',
                    borderBottomWidth:1,
                    padding:0,
                    marginTop: 80,
                    marginLeft:40,
                    marginRight:40,
                    flexDirection:'row',
                    alignItems: 'center'


                },
            })


export default Forget;