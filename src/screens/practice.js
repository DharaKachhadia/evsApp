import React,{useState} from 'react'
import { View, Text ,Image,StyleSheet,KeyboardAvoidingView,TouchableOpacity,ActivityIndicator} from 'react-native'
import { TextInput,Button } from 'react-native-paper';
// import auth from '@react-native-firebase/auth'
export default function SignupScreen({navigation}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    if(loading){
        return  <ActivityIndicator size="large" color="#00ff00" />
    }
    // const userLogin = async ()=>{
    //     setLoading(true)
    //     if(!email || !password){
    //            alert("please add all the field")
    //            return 
    //     }
    //     try{
    //       const result =  await auth().signInWithEmailAndPassword(email,password)
    //         setLoading(false)
    //     }catch(err){
    //         alert("something went wrong")
    //     }
       

    // }
    return (
        <KeyboardAvoidingView behavior="position">
            <View style={styles.box1}>
            <Image
        style={{height:100, width:180,borderRadius:20,backgroundColor:'#ffffff'}}
        source={{
          uri: 'https://image.similarpng.com/very-thumbnail/2020/06/Instagram-name-logo-transparent-PNG.png',
        }}/>
                <Image
        style={{height:300, width:300,borderRadius:20}}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg',
        }}/>
            </View>
            <View style={styles.box2}>
            
                 <TextInput
                 label="Email"
                 value={email}
                 onChangeText={(text)=>setEmail(text)}
                 mode="outlined"
                />
                <TextInput
                 label="password"
                 mode="outlined"
                 value={password}
                 onChangeText={(text)=>setPassword(text)}
                 secureTextEntry
                />
                 <Button style={{backgroundColor:'blue'}}
                mode="contained"
                onPress={()=>userLogin()}
                >Login</Button>
                <TouchableOpacity onPress={()=>navigation.navigate('signup')}><Text style={{textAlign:"center"}}>Dont have an account ?</Text></TouchableOpacity>
               
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    text:{
        fontSize:40,
        color:"red",
        margin:10
    },
    img:{
        width:200,
        height:200
    },
    box1:{
        alignItems:"center"
    },
    box2:{
        paddingHorizontal:40,
        justifyContent:"space-evenly",
        height:"45%"
    }
 });