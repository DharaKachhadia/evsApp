import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image,TextInput,StatusBar,Linking,Modal,Animated,Alert} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};
const Service = (props) => {

  const [visible, setVisible] = React.useState(false);

  const [mobileNo,setMobileNo] = React.useState()
  const [email,setEmail] = React.useState()
  const [message,setMessage] = React.useState()

  const sendCred=async(props)=>{

    fetch("http://evspoint.com/api/help",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "MobileNo":mobileNo,
        "Email":email,
        "Message":message,
      } )
    })
    .then(res=>res.json())
    .then(async(data)=>{
      try{  
        if(mobileNo.length !== 10)
        {
          Alert.alert( "please enter valid mobileNo",)
        }
        else if(email.length == 0)
        {
          Alert.alert("password is must be required",)
        }
        else if(message.length == 0)
        {
          Alert.alert("password is must be required",)
        }
       else{          
        setVisible(true)
       }
      }catch(error){
        console.log(error.message)
        Alert.alert(
          "please enter all fields",
        )
    }
  })
   }
    return (
      <View style={{backgroundColor:'#ffffff'}}>
      <ModalPoup visible={visible}>
      <View style={{alignItems: 'center'}}>
        {/* <View style={styles.header}>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Image
              source={require('./assets/x.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View> */}
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../images/success1.png')}
          style={{height: 120, width: 120, marginVertical: 10}}
        />
      </View>

      <Text style={{marginVertical: 20, fontSize: 20, textAlign: 'center',fontWeight:'bold',color: 'black'}}>
        Your Message Send successfully !
      </Text>
      <TouchableOpacity onPress={() => props.navigation.replace("Drawer1")} activeOpacity={0.7} style={{ alignSelf: 'center',height:40, width:'40%',backgroundColor:'#75c31e',borderRadius:5,marginTop:20}}>
          <Text style={{alignSelf: 'center',color:'white',fontWeight:'bold',marginTop:5,fontSize:20}}>Go Home</Text>
      </TouchableOpacity>
    </ModalPoup>
          <View style={styles.container}>
              <StatusBar hidden/>
          <View style={styles.container1}>
          {/* <TouchableOpacity onPress={()=>{props.navigation.replace('Drawer1')}} style={{marginTop:20,marginLeft:10}}>
          <Text style={styles.text}>hello</Text>  
          </TouchableOpacity> */}

          <View style={{ flex:1,justifyContent: 'center',alignItems: 'center',marginTop:5}}>
          <Text style={styles.text1}>Help</Text>
          </View> 
          </View>
        <View style={{flex:1}}>
        <LottieView style={{marginTop:-180}}
		  source={require('../images/lf30_editor_zftpx4sa.json')}
		  size={10}
		  autoPlay
		  loop
		 />
        <View style={styles.input}>
        <FontAwesome name="phone" type="FontAwesome" size={25} color="#75C31E" />
        <TextInput 
         placeholder="MobileNo:"
         placeholderTextColor='black'
         color='black'
         onChangeText={(text)=>setMobileNo(text)} 
         />
         </View> 

         <View style={styles.inputt}>
         <MaterialIcons name="email" type="MaterialIcons" size={25} color="#75C31E" />
         <TextInput 
         placeholder="Email:"
         placeholderTextColor='black'
         color='black'
         onChangeText={(text)=>setEmail(text)} 
         />
         </View> 

         <View style={styles.inputt}>
         <MaterialIcons name="message" type="MaterialIcons" size={25} color="#75C31E" />
         <TextInput 
         placeholder="Message:"
         placeholderTextColor='black'
         color='black'
         onChangeText={(text)=>setMessage(text)} 
         />
         </View> 

         <View style={{height: 50,marginTop:20}}>
         <TouchableOpacity
          style={[styles.btn,{backgroundColor: '#75C31E',}]}
          onPress={() => sendCred(props)}
          >
          <Text style={{fontWeight: 'bold', fontSize: 15 , color: 'white'}}>
          Submit
         </Text>
         </TouchableOpacity>
         </View>
         </View>

         <View style={{backgroundColor:'#75C31E',height:55,flexDirection:'row',justifyContent:'space-between'}}>
         
           <TouchableOpacity 
            onPress={()=>Linking.openURL(`tel:${6355995765}`)} 
            style={{flexDirection:'row'}}
           >
           <MaterialIcons style={{marginTop:12,marginLeft:10}} name="call" type="MaterialIcons" size={25} color="white" />
           <Text style={{marginTop:15,color:'white',fontSize:15}}>
            +91 6355995765
             </Text>  
             </TouchableOpacity> 
   
             <TouchableOpacity 
             onPress={() => Linking.openURL('mailto:rutvikghaskata72@gmail.com?subject=SendMail&body=Description') }
             style={{flexDirection:'row'}}
              >
            <MaterialIcons style={{marginTop:12}} name="mail" type="MaterialIcons" size={25} color="white" />
           <Text style={{marginTop:15,color:'white',fontSize:15,marginRight:10}}>
           Mahesh490@gmail.com
             </Text>  
             </TouchableOpacity> 
         
        </View>
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
    input: {
      borderColor: 'grey',
      borderBottomWidth:1,
      marginLeft:40,
      marginRight:40,
      marginTop:180,
      flexDirection: 'row',
      alignItems: 'center'
     },
     inputt: {
      borderColor: 'grey',
      borderBottomWidth:1,
      marginLeft:40,
      marginRight:40,
      marginTop:15,
      flexDirection: 'row',
      alignItems: 'center'
     },
     btn: {
      flex: 1,
      height: 50,
      // borderRadius: 10,
      marginTop:25,
      marginBottom:-20,
      marginLeft:60,
      marginRight:60,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
     },
     modalBackGround: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '80%',
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 30,
      borderRadius: 20,
      elevation: 20,
      borderWidth:3,
      borderColor:'#75c31e'
    },
    header: {
      width: '100%',
      height: 40,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  
})

export default Service
