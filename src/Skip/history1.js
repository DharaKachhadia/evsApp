import React,{useEffect,useState} from 'react'
import { View, Text,StyleSheet,TouchableOpacity ,StatusBar,RefreshControl,ActivityIndicator,FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import profile from './Profile'

const Service = (props) => {

  const [userId,setUserId] = useState("Loading")
  // const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(true);
  const id=(userId)

  const getMovies = async () => {
     try {
      //  console.log({id})
      const response = await fetch(`http://evspoint.com/api/booking/${id}`);
      const json = await response.json();
      setData(json);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect( async()=>{
    const token = await AsyncStorage.getItem("token")
    fetch('http://evspoint.com/api/',{
       headers: new Headers({
          Authorization: "Bearer "+token
       })
    }).then(res=>res.json())
      .then(data=>{
       //   console.log(data)
         setUserId(data.userId) 
      }).then( getMovies() );
 },
 [id])

 const onRefresh = () => {
  //Clear old data of the list
  setData([]);
  //Call the Service to get the latest data
  getMovies();
};
    return (
        <View style={styles.container}key={data.id}>
           <StatusBar  hidden />
          <View style={styles.container1}>
          <TouchableOpacity onPress={()=>{props.navigation.replace('Drawer')}}>
          <Text style={styles.text}>Back</Text>        
          </TouchableOpacity>
          <View style={{ flex:1,justifyContent: 'center',alignItems: 'center',marginTop:-70}}>
          <Text style={styles.text1}>My History</Text>
          </View>
          
          </View>
          
          <View style={styles.container2}>
         
          <View style={{ flex: 1, padding: 15 }}>
          {refreshing ? <ActivityIndicator /> : null}
      {/* {isLoading ?  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#75C31E" />
    </View>  */}
    {/* :( */}


        <FlatList
          data={data}
          keyExtractor={(item)=>item.address}
          refreshControl={
            <RefreshControl
              //refresh control used for the Pull to Refresh
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          renderItem={({ item }) => (

            <View style={styles.history}>
            <Text style={{marginRight:5,fontWeight:'bold',alignSelf:'center',fontSize:20,padding:5}}>StationName</Text>
            <View style={{borderWidth:0.7,width:'90%',marginLeft:'5%',marginTop:5,borderColor:'#c1c1c1'}}></View>
          <View >  

            <View style={{flexDirection:'row',marginLeft:'5%',marginTop:10}}>
                  <Text style={{fontWeight:'bold',color:'black'}}>Customer : </Text>
                  <Text style={{marginRight:5,fontWeight:'bold'}}>{item.FirstName}</Text>   
                  <Text style={{marginRight:20,fontWeight:'bold'}}>{item.LastName}</Text> 
            </View >  

            <View style={{flexDirection:'row',marginLeft:'5%',marginTop:10}} >
              <Text style={{fontWeight:'bold',color:'black'}}>Plug : </Text>
              <Text style={{marginRight:20,color:'orange',fontWeight:'bold'}}>{item.Plug}</Text>
            </View>

            <View style={{flexDirection:'row',marginLeft:'5%',marginTop:10}} > 
              <Text style={{fontWeight:'bold',color:'black'}}>Time : </Text> 
              <Text style={{marginRight:20,color:'blue',fontWeight:'bold'}}>{item.Time}</Text>  
            </View>  

            <View style={{flexDirection:'row',marginLeft:'5%',marginTop:10,marginBottom:10}}>
              <Text style={{fontWeight:'bold',color:'black'}}>Payment : </Text>
              <Text style={{marginRight:20,color:'green',fontWeight:'bold'}}>{item.Payment}</Text> 
            </View>
          </View>
            <View style={{height:30,width:'100%',backgroundColor:'#75C31E',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
            <TouchableOpacity  onPress={()=>{props.navigation.replace('Historydetails',{item})}} >
               <Text style={{alignSelf:'center',color:'white',marginTop:3}}>Show More Details</Text>
            </TouchableOpacity>
            </View>
            </View>             
          )}
        />
      {/* )} */}
    </View>
              </View>
          <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.replace('Drawer')}}>
          <Text style={styles.submit}>Go to Home</Text>
          </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    submit:{
        fontWeight:'bold',
        fontSize:20,
        color:'white'
    },
    btn:{  
        height:55,
        width:'86%',
        borderRadius:10,
        marginTop:30,
        marginLeft:'7%',
        backgroundColor:'#75C31E',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:10
      },
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
    container2:{
       height:'70%',
       width:'86%',
       marginLeft:'7%',
       backgroundColor:'white',
       borderRadius:10,
       marginTop:-50,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 5 },
       shadowOpacity: 1.0,
       elevation: 10,
       position: 'relative'
    },
    history:{
      marginBottom:50,
      backgroundColor:'white',
      width:'100%',
      borderRadius:10,
      borderWidth:1,
      borderColor:'#75C31E',
      elevation:10
    }

})

export default Service
