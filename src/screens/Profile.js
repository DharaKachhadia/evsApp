import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image,TextInput, StatusBar, BackHandler,ImageBackground} from 'react-native';
// import Drawer from './Drawer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';


const profile = (props)=>{

  const [image,setImage] = useState('https://media.gettyimages.com/photos/years-old-girl-playing-yoga-and-meditation-picture-id1265608005?s=612x612');

     const takePhotoFromCamera=()=>{
      ImagePicker.openCamera({
        compressImageMxwidth: 300,
         compressImageMaxheight: 300,
        cropping: true,
        compressImageQuality:0.7
      }).then(image => {
        console.log(image);
        setImage(image.path);
        this.bs.current.snapTo(1)
      });
     }
     const choosePhotoFromLibrary=()=>{
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        compressImageQuality:0.7
      }).then(image => {
        console.log(image);
        setImage(image.path);
        this.bs.current.snapTo(1)
      });

     }

     renderInner=()=>(
       <View style={styles.panel}>
     <View style={{alignItems: 'center'}}>
         <Text style={styles.pannelTitle}>Edit photos</Text>
         <Text style={styles.panelSubtitle}>Chooes your profile picture</Text>
     </View>
          <TouchableOpacity style={styles.pannelButton} onPress={takePhotoFromCamera}>
            <Text style={styles.pannelButtonTitle}>Take  Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pannelButton} onPress={choosePhotoFromLibrary}>
            <Text style={styles.pannelButtonTitle}>Select From Gellary</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.bs.current.snapTo(1)} style={styles.pannelButton}>
            <Text style={styles.pannelButtonTitle}>Cancel</Text>
          </TouchableOpacity>
      </View>
    );
    renderHeader=()=>(
       <View style={styles.Header}>
         <View style={styles.panelHeader}>
           <View style={styles.panelHandle}/>
          </View>
       </View>
    )


    bs = React.createRef();
    fall = new Animated.Value(1);



  const [firstName,setFirstName] = useState("Loading")
  const [lastName,setLastName] = useState("Loading")
  const [contactNo,setContactNo] = useState("Loading")
  const [email,setEmail] = useState("Loading")

  useEffect( async()=>{
    const token = await AsyncStorage.getItem("token")
    fetch('http://evspoint.com/api/',{headers: new Headers({Authorization: "Bearer "+token})})
    .then(res=>res.json())
      .then(data=>{
       //   console.log(data)
         setFirstName(data.firstName)
         setLastName(data.lastName)
         setContactNo(data.contactNo)
         setEmail(data.email)   

      })
 },[])

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
       return (
        <View style={{  height: '100%',backgroundColor: 'white'}} >
            <StatusBar hidden/>
            <BottomSheet
             ref={this.bs}
             snapPoints={[330, 0]}
             renderContent={this.renderInner}
             renderHeader={this.renderHeader}
             initialSnap={1}
             callbackNode={this.fall}
             enabledContentGestureInteraction={true}
            />
        
        <View style={styles.container1}>
            <TouchableOpacity onPress={()=>{props.navigation.replace('Drawer1')}} >
          <Text style={styles.text}>Back</Text> 
          </TouchableOpacity >
          <Text style={styles.text1} color='white'>Your Profile</Text>
        </View>


        <View style={styles.container2}> 
         <Image style={styles.image} source={{uri:image}}/>
            
        <TouchableOpacity onPress={()=>this.bs.current.snapTo(0)} style={{marginLeft:'60%',marginTop:'-20%',height:35,width:40,backgroundColor:'#75C31E',borderRadius:30}} >
        <Ionicons name="camera" size={25} style={{color: 'white',alignSelf:'center',marginTop:3}} />
        </TouchableOpacity>

          </View>
           <View>
              <Text style={{marginLeft:'10%',marginTop:90,fontSize:13}} >FirstName</Text>
              <TextInput style={styles.textInput} defaultValue={firstName}></TextInput>
              <View style={{marginLeft:'10%',marginTop:-10,width:'80%',height:1,backgroundColor:'grey'}}></View>
              <Text style={{marginLeft:'10%',marginTop:25,fontSize:13,}}>LastName</Text>
              <TextInput style={styles.textInput} defaultValue={lastName} ></TextInput>
              <View style={{marginLeft:'10%',marginTop:-10,width:'80%',height:1,backgroundColor:'grey'}}></View>
              <Text style={{marginLeft:'10%',marginTop:25,fontSize:13}}>Email</Text>
              <TextInput style={styles.textInput} defaultValue={email}></TextInput>
              <View style={{marginLeft:'10%',marginTop:-10,width:'80%',height:1,backgroundColor:'grey'}}></View>
              <Text style={{marginLeft:'10%',marginTop:25,fontSize:13}}>ContactNo</Text>
              <TextInput style={styles.textInput}   defaultValue={contactNo.toString()}></TextInput>
              <View style={{marginLeft:'10%',marginTop:-10,width:'80%',height:1,backgroundColor:'grey'}}></View>
              <Text style={{marginLeft:'10%',marginTop:25,fontSize:13}}>Password</Text>
              <TextInput style={styles.textInput} defaultValue='********'></TextInput>
              <View style={{marginLeft:'10%',marginTop:-10,width:'80%',height:1,backgroundColor:'grey'}}></View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.submit}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
   </View>
       )     
}

const styles = StyleSheet.create({
    submit:{
      fontFamily:'bold',
        fontSize:15,
        color:'white',
      },
    image:{
    // marginTop:17,
    // marginLeft:19,    
    height:'100%',
    width:'100%',
    borderRadius:65
    },
    text:{
    fontWeight:'bold',
    marginTop:420,
    marginLeft:120,
    fontSize:20,
    color: 'white'
   },
   text1:{
    fontWeight:'bold',
    marginTop:20,
    marginLeft:220,
    fontSize:30,
    color: 'white',
   },
 container1: {
     height:600,
     width:600,
     marginTop:-400,
     borderRadius:600,
     backgroundColor:'#75C31E',
     alignSelf:'center',
 },
 container2: {
     height:120,
     width:120,
     borderWidth:5,
     borderRadius:120,
     borderColor:'#75C31E',
     backgroundColor:'white',
     marginTop:135,
    //  shadowColor: '#000',
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 1.0,
    // elevation: 10,
    // position: 'relative',
    alignSelf:'center',
    position: 'absolute',
 },
 
 textInput:{
   marginTop:-10,
   marginLeft:'10%',
   width:'80%',
   color: '#404040'
 },
 TouchableOpacity:{
   height:10,
   width:'80%',
   marginLeft:'10%',
   backgroundColor:'black'
 },
 btn:{    
  height:45,
  width:'80%',
  borderRadius:10,
  marginTop:50,
  marginLeft:'10%',
  marginRight:100,
  backgroundColor:'#75C31E',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius:8
},
Header:{
  backgroundColor:'#75C31E',
  shadowColor:'#333333',
  shadowOffset:{width:-1,height: -3},
  shadowRadius:2,
  shadowOpacity:0.4,
  paddingTop:20,
  borderTopLeftRadius:20,
  borderTopRightRadius:20
},
panelHandle:{
  width:40,
  height:8,
  borderRadius:4,
  backgroundColor:'#00000040',
  marginBottom:10,
},
panelHeader:{
  alignSelf:'center',
},
panel:{
  padding:20,
  backgroundColor:'#ffffff',
  paddingTop:20,
},
pannelTitle:{
  fontSize:27,
  height:35
},
panelSubtitle:{
  fontSize:14,
  color:'grey',
  height:30,
  marginBottom:10
},
pannelButton:{
  padding:13,
  borderRadius:10,
  backgroundColor:'#75C31E',
  alignItems: 'center',
  marginVertical:7,
},
pannelButtonTitle:{
  fontSize:17,
  fontWeight:'bold',
  color:'white'
},
})

export default profile;