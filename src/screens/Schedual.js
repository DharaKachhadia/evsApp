
// // import { View, Text,StyleSheet,BackHandler,ScrollView,TouchableOpacity,Alert, StatusBar} from 'react-native';
// // import React,{useState,useEffect}from 'react';
// // import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // export default function booking({route , navigation}) {
  
// //   const [date,setDate] =useState('')
// //   const [selectedId, setSelectedId] = useState(null);
// //   const onDayPress =(day)=> {
// //     setDate(day.dateString);
// //   }
// //   const [value,setValue]=useState('')
// //   const [userId,setUserId] = useState("Loading")
// //   const[FirstName,setFirstName] = useState('');
// //   const[ LastName,setLastName] = useState('');
// //   const[ ContactNo,setContactNo] = useState('');
// //   const[Email,setEmail] = useState('');
// //   const OwnerId=route.params.OwnerId;
// //   const StationName=route.params.StationName;
// //   const stationAddress=route.params.stationAddress;
// //   const ownerName=route.params.ownerName;
// //   const StationContact=route.params.StationContact;
// //   const selectedCarValue=route.params.selectedCarValue;
// //   const selectedPlugValue=route.params.selectedPlugValue;
// //   const City=route.params.City;
// //   const State=route.params.State;
// //   const open =route.params.openingTime;
// //   const close=route.params.closeTime;
// //   const StationTiming=open+' To '+close;
// //   var open1 = open.substring(0,1);
// //   var close1 = close.substring(0,1);
// //   let stars = [];
// //   let stars1 = [];

// //      for (var i = open1; i <12; i++) {
// //         let k=i+1;
// //         let time = i+'am'
// //         let time1 = k+'pm'
// //          const backgroundColor = time === selectedId ? "#75c31e" : "#f9f9f9";

// //          const color= time === selectedId ? "#f9f9f9":'#254117';
// //          const size = time === selectedId ? 110 : 100;
// //          const margin = time === selectedId ? 5 : 10;
// //         stars.push((
// //         <TouchableOpacity onPress={()=>{setSelectedId(time),setValue(time+' To '+time1)}} activeOpacity={0.7} 
// //         style={{
// //           backgroundColor:backgroundColor,
// //           borderColor:'#75c31e',
// //           borderWidth:3,
// //           height:size,
// //           marginTop:margin,
// //           marginLeft:15,
// //           borderRadius:10,
// //           width:size, 
// //           elevation:10,
// //           marginBottom:20  
// //         }}>
// //           <Text style={{ marginTop:5,fontSize:18,alignSelf:'center',fontWeight:'bold',fontFamily:'monospace',color:color}}>{time}</Text>
// //           <Text style={{marginTop:5,fontSize:15,alignSelf:'center',fontWeight:'bold',fontFamily:'monospace',color:color}}>To</Text>
// //           <Text style={{marginTop:5,fontSize:18,alignSelf:'center',fontWeight:'bold',fontFamily:'monospace',color:color}}>{time1}</Text>
// //           </TouchableOpacity>
// //           ));
// //       }
// //      for (var i = 1; i < close1; i++) {
// //           let k=i+1;
// //           let time = i+'am'
// //           let time1 = k+'pm'
// //           const backgroundColor = time === selectedId ? "#75c31e" : "#f9f9f9";

// //          const color= time === selectedId ? "#f9f9f9":'#254117';
// //          const size = time === selectedId ? 110 : 100;
// //          const margin = time === selectedId ? 5 : 10;
// //           stars1.push((
// //           <TouchableOpacity onPress={()=>{setSelectedId(time),setValue(time+' To '+time1)}} activeOpacity={0.7} 
// //           style={{
// //             backgroundColor:backgroundColor,
// //             borderColor:'#75c31e',
// //             borderWidth:3,
// //             height:size,
// //             marginTop:margin,
// //             marginLeft:15,
// //             borderRadius:10,
// //             width:size, 
// //             elevation:10,
// //             marginBottom:20  
// //           }
           
// //           }>
// //            <Text style={{ marginTop:5,fontSize:18,alignSelf:'center',fontWeight:'bold',fontFamily:'monospace',color:color}}>{time}</Text>
// //            <Text style={{ marginTop:5,fontSize:15,alignSelf:'center',fontWeight:'bold',fontFamily:'monospace',color:color}}>To</Text>
// //            <Text style={{ marginTop:5,fontSize:18,alignSelf:'center',fontWeight:'bold',fontFamily:'monospace',color:color}}>{time1}</Text>
// //             </TouchableOpacity>));
// //         }
// //         function handleBackButtonClick() {
// //           navigation.navigate('Booking');
// //           return true;
// //         }
// //         useEffect(() => {
// //           BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
// //           return () => {
// //             BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
// //           };
// //         }, []);  
// //             useEffect( async()=>{
// //       const token = await AsyncStorage.getItem("token")
// //       fetch('http://evspoint.com/api/',{
// //          headers: new Headers({
// //             Authorization: "Bearer "+token
// //          })
// //       }).then(res=>res.json())
// //         .then(data=>{          
// //           //  setUserId(data.userId) 
// //            setFirstName(data.firstName)
// //            setLastName(data.lastName)
// //            setContactNo(data.contactNo)
// //            setEmail(data.email)   
// //         })
// //    },[])

// //    useEffect( async()=>{
// //     const token = await AsyncStorage.getItem("token")
// //     fetch('http://evspoint.com/api/',{
// //        headers: new Headers({
// //           Authorization: "Bearer "+token
// //        })
// //     }).then(res=>res.json())
// //       .then(data=>{          
// //          setUserId(data.userId) 
// //          setFirstName(data.firstName)
// //          setLastName(data.lastName)
// //          setContactNo(data.contactNo)
// //          setEmail(data.email)   
// //       })
// //  },[])
// //  const sendCred=async(navigation)=>{

// //           fetch("http://evspoint.com/api/user/booking",{
// //             method: "POST",
// //             headers: {
// //               'Content-Type': 'application/json'
// //             },
// //             body:JSON.stringify({
// //               "UserId":userId,
// //               "FirstName" : FirstName,
// //               "LastName" :  LastName,
// //               "ContactNo": ContactNo,
// //               "Email":Email,
// //               "City":City,
// //               "State":State,
// //               "Car": selectedCarValue,
// //               "Plug":selectedPlugValue,
// //               "Date":date,
// //               "Time":value,
// //               "StationName":StationName,
// //               "StationContact":StationContact,
// //               "OwnerId":OwnerId,
// //               "OwnerName":ownerName,
// //               "StationAddress":stationAddress,
// //               "StationTiming":StationTiming
// //             } )
// //           })
// //           .then(res=>res.json())
// //           .then(async(data)=>{
// //             try{            
// //               console.log(data.token1)
// //               navigation.navigate("Payment",{FirstName,LastName})
              
// //             }catch(error){
// //               console.log(error.message)
// //               Alert.alert(
// //                 "please enter valid detalis",
// //               )
// //           }
// //         })
// //         }
// //     return (
// //       <ScrollView style={{backgroundColor:'#dcedc9'}}>
// //      <StatusBar hidden/>
// //      <TouchableOpacity onPress={()=>{
// //         navigation.navigate("Booking")
// //     }}>
// //      <Ionicons name="chevron-back-outline" size={35} style={{color: 'black',marginLeft:13,marginTop:20}} />
// //      </TouchableOpacity>
// //      <View style={{marginTop:5,marginBottom:5}}>
// //      <Text style={styles.header}>when do you want to </Text>
// //      <Text style={styles.header}>schedual charge your EV</Text>
// //      </View>
// //      <View style={{backgroundColor:'#ffffff',marginTop:10,elevation:10,borderTopRightRadius:20,borderTopLeftRadius:20, width:'100%'}}>
// //  <Calendar
// //   style={{
// //     width:'95%',
// //     alignSelf:'center',
// //     borderRadius:20,
// //     height: 385,
// //     // elevation:10
// //   }}
// //   onDayPress={onDayPress}
// //   hideExtraDays={true}
  
// //   theme={{
// //     selectedDayBackgroundColor: '#75c31e',
// //     selectedDayTextColor:'white',
// //     todayTextColor: '#75c31e',
// //     dayTextColor: 'black',
// //     arrowColor: 'green',
// //     monthTextColor: '#75c31e',
// //     textDayFontFamily: 'monospace',
// //     textMonthFontFamily: 'monospace',
// //     textDayHeaderFontFamily: 'monospace',
// //     textDayFontWeight: '300',
// //     textMonthFontWeight: 'bold',
// //     textDayHeaderFontWeight: '300',
// //     textDayFontSize: 20,
// //     textMonthFontSize: 26,
// //     textDayHeaderFontSize: 17
// //   }}
// // />
// //    <Text style={{fontWeight: 'bold',fontFamily:'monospace',color:'grey',marginLeft:'7%'}}>Select Time For Charge:</Text>
// //           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
// //            <View style={{flexDirection: 'row'}}>{stars}</View> 
// //            <View style={{flexDirection: 'row'}}>{stars1}</View> 
// //           </ScrollView>
// //           <TouchableOpacity  onPress={() => sendCred(navigation) } style={styles.btn} activeOpacity={0.8}>
// //           <Text style={{fontWeight: 'bold',fontSize:22,fontFamily:'monospace',color:'white',alignSelf:'center',marginTop:10}}>Process To Payment</Text>
// //           </TouchableOpacity>
        
// //           </View>
// //       </ScrollView>
    
// //     );	
// // }

// // const styles = StyleSheet.create({
// //   container:{
// //     backgroundColor:'#75c31e',
// //     marginTop:30,
// //     height:50,
// //     width:160,
// //     alignSelf:'center',
// //     borderTopLeftRadius:10,
// //     borderTopRightRadius:10
// //   },
// //   calender:{
// //      backgroundColor:'#75c31e'
// //   },
// //   container1:{
// //     alignSelf:'center',
// //     fontWeight:'bold',
// //     fontSize:20,
// //     marginTop:10,
// //     color:'#ffffff'
// //   },
// //   header:{
// //     marginLeft:'7%',
// //     fontWeight:'bold', 
// //     fontSize:20, 
// //     fontFamily:'Open Sans'
// //   },
// //   scroll:{
// //     flexDirection: 'row',
// //     width:'95%',
// //     alignSelf:'center',
// //     marginTop:10,
// //   },
// //   data:{
// //     flexDirection:'row',
// //     alignSelf:'center',
// //     marginTop:30
// //   },
// //   selectedDate:{
// //     height:50,
// //     width:'65%',
// //     borderColor:'green',
// //     backgroundColor:'#dcedc9',
// //     borderBottomWidth:2,
// //     borderTopWidth:2,
// //     borderLeftWidth:2,
// //     borderTopLeftRadius:5
// //   },
// //   selDate:{
// //     alignSelf:'center',
// //     fontSize:18,
// //     color:'black',
// //     fontWeight:'bold',
// //     marginTop:10
// //   },
// //   date:{
// //     height:50,
// //     width:'35%',
// //     borderColor:'green',
// //     backgroundColor:'#dcedc9',
// //     borderWidth:2,
// //     borderTopRightRadius:5
// //   },
// //   data1:{
// //     flexDirection:'row',
// //     alignSelf:'center'
// //   },
// //   selectedTime:{
// //     height:50,
// //     width:'65%',
// //     borderColor:'green',
// //     backgroundColor:'#dcedc9',
// //     borderBottomWidth:2,
// //     borderLeftWidth:2,
// //     borderBottomLeftRadius:5
// //   },
// //   selTime:{
// //     alignSelf:'center',
// //     fontSize:18,
// //     color:'black',
// //     fontWeight:'bold',
// //     marginTop:10
// //   },
// //   time:{
// //     height:50,
// //     width:'35%',
// //     borderColor:'green',
// //     backgroundColor:'#dcedc9',
// //     borderBottomWidth:2,
// //     borderLeftWidth:2,
// //     borderRightWidth:2,
// //     borderBottomRightRadius:5
// //   },
// //   date1:{
// //     alignSelf:'center',
// //     color:'black',
// //     fontWeight:'bold',
// //     fontSize:18,
// //     marginTop:10
// //   },
// //   time1:{
// //     alignSelf:'center',
// //     color:'black',
// //     fontWeight:'bold',
// //     fontSize:18,
// //     marginTop:10
// //   },
// //   ShedualText:{
// //     marginTop:5,
// //     fontSize:18,
// //     alignSelf:'center',
// //     fontWeight:'bold',
// //     fontFamily:'monospace',
// //     color:'#254117'
// //   },
// //   ShedualText1:{
// //     marginTop:5,
// //     fontSize:15,
// //     alignSelf:'center',
// //     fontWeight:'bold',
// //     fontFamily:'monospace'
// //   },
// //   shedualView:{
// //     backgroundColor:'#f9f9f9',
// //     borderColor:'#75c31e',
// //     borderWidth:3,
// //     height:100,
// //     marginTop:10,
// //     marginLeft:15,
// //     borderRadius:10,
// //     width:100, 
// //     elevation:10,
// //     marginBottom:20  
// //   },
// //   btn:{
// //     height:50,
// //     width:'80%',
// //     alignSelf:'center',
// //     borderRadius:10,
// //     backgroundColor:'#75c31e',
// //     marginTop:20,
// //     marginBottom:40
// //   }
// // })

// // //location_city
// import { View, Text } from 'react-native'
// import React from 'react'

// const Schedual = () => {
//   return (
//     <View>
//       <Text>Schedual</Text>
//     </View>
//   )
// }

// export default Schedual


import { View, Text } from 'react-native'
import React from 'react'

const Schedual = () => {
  return (
    <View>
      <Text>Schedual</Text>
    </View>
  )
}

export default Schedual