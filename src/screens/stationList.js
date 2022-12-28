import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,Image,StyleSheet,BackHandler ,RefreshControl,TouchableOpacity,Linking, SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StarRating from './star';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
export default function Success({navigation}){

  const [refreshing, setRefreshing] = useState(true);
  const [data, setData] = useState([]);
  const [masterData,setmasterData]=useState([]);
  const [search,setsearch]=useState('');
  const [loading,setLoading] =useState(true)
  const getMovies = async () => {
     try {
      const response = await fetch('http://localhost:3000/station');
      const json = await response.json();
      setData(json);
      setLoading(false);
      setmasterData(json);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
     
     }
  }

  useEffect(() => {
    getMovies();
  }, []);


  const searchFilter = (text) => {
    if(text){
      const newData = masterData.filter((item) => {
        const itemData = item.StationName ? item.StationName.toUpperCase() 
         : ''.toUpperCase(); 
         const textData = text.toUpperCase();
         return itemData.indexOf(textData)>-1; 
        
         
      });
      setData(newData);
      setsearch(text);
    }else{
      setData(masterData);
      setsearch(text);
    }
  }

  //  const ItemSeparatorView = () => {
  //    return (
  //      <View
  //      style={{height:0.5,width:'100%',backgroundColor:"#c8c8c8"}}
  //      />
  //    )
  //  }
  //back button


  function handleBackButtonClick() {
    navigation.navigate('Drawer1');
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  //main return

  const onRefresh = () => {
    //Clear old data of the list
    setData([]);
    //Call the Service to get the latest data
    getMovies();
  };
  const LoadingImage = () =>{
    return (
      <View style={{width:"100%"}}>
      <SkeletonPlaceholder backgroundColor="#f3f3f3">
        <SkeletonPlaceholder.Item  alignItems="center" >
          <SkeletonPlaceholder.Item width={335} height={180} borderTopLeftRadius={10} borderTopRightRadius={10} />
          <SkeletonPlaceholder.Item width={335} height={80} marginTop={2}/>
          <View style={{width:"100%",justifyContent:'space-between',marginTop:5,flexDirection: 'row'}}>
             <SkeletonPlaceholder.Item width={100} height={40} borderRadius={30} marginLeft={10}/>
             <SkeletonPlaceholder.Item width={100} height={40} borderRadius={30} marginRight={10}/>
          </View>
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item  alignItems="center" marginTop={20}>
          <SkeletonPlaceholder.Item width={335} height={180} borderTopLeftRadius={10} borderTopRightRadius={10} />
          <SkeletonPlaceholder.Item width={335} height={80} marginTop={2}/>
          <View style={{width:"100%",justifyContent:'space-between',marginTop:5,flexDirection: 'row'}}>
             <SkeletonPlaceholder.Item width={100} height={40} borderRadius={30} marginLeft={10}/>
             <SkeletonPlaceholder.Item width={100} height={40} borderRadius={30} marginRight={10}/>
          </View>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
      </View>
    );
}
  return (
   
    <SafeAreaView style={{ flex: 1, padding: 24,backgroundColor:'#ffff'}}>
        <View style={styles.abc}>
        <MaterialIcons name="search" type="MaterialIcons" size={30} color="#75C31E" style={{marginTop:7,marginLeft:10}} />
       <TextInput 
         color= 'black'
         placeholder="Search Station "
         placeholderTextColor="black"
         value={search}
         underlineColorAndroid="transparent"
         onChangeText={(text)=>searchFilter(text)}
        />
        </View>
        {refreshing ? <ActivityIndicator /> : null}
        {loading ? <LoadingImage/> : (
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={data.reverse()}
          keyExtractor={(item)=>item.address}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          renderItem={({ item }) => 
          ( 
            item.length === 0 ?  <View></View> 
            
            :
            <View style={styles.card} key={item} >
             
              <TouchableOpacity   style={styles.crd} activeOpacity={0.7}
               onPress={() => navigation.navigate('StationDetails',{item}) }>
              <Image source={{uri:item.Image}}  resizeMode="cover" style={styles.cardImg}/>
            </TouchableOpacity>

            <View style={{height:110,borderBottomWidth:1,borderRadius:5,borderColor:'grey'}}>

            <View style={{marginLeft:10}}>
              
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
            <Text style={styles.cardTitle}>{item.StationName}</Text> 

            <View style={{height:23,width:45,backgroundColor:'#158415',marginRight:10,marginTop:7,borderRadius:7}}>

            <View style={{alignSelf:'center',flexDirection: 'row',marginTop:1}}>
               <Text style={{color:'white',fontSize:13,marginRight:5,fontWeight:'bold'}}>{item.rating}</Text>
               <Ionicons name="star" size={12} style={{color: 'white',marginTop:3}} />  

            </View>

           </View> 
           </View>

           <StarRating ratings={item.rating} reviews={item.review} />

           <View style={{flexDirection: 'row'}}>
           <Ionicons name="location" size={20} style={{color: 'grey',marginTop:10,marginLeft:-5}} />
           <Text  style={{marginTop:3,color: '#242526',fontSize:12}}>{item.address}</Text>
           </View>

           <View style={{flexDirection: 'row',marginTop:4}}>
           <Ionicons name="time-outline" size={15} style={{color: '#242526',marginLeft:-3,marginTop:1}} />
           <Text style={{color:'green',fontSize:12,marginTop:1,marginLeft:3}}>{item.openingTime} To {item.closeTime}</Text>
           </View>
          </View>
      
        </View>

        <View style={{height:50,flexDirection: 'row',justifyContent: 'space-between'}}>

       <TouchableOpacity style={{flexDirection: 'row'}}
        onPress={()=>Linking.openURL(item.Location)}
        activeOpacity={0.7}>
       <Image source={require('../assets/direction.png')}style={{height:40,width:40,marginTop:7}}/> 
      
       <Text style={{marginTop:13}}>
        Direction
       </Text>
        </TouchableOpacity >
         <TouchableOpacity style={styles.direction} activeOpacity={0.7} onPress={  () => navigation.navigate('Booking',{item}) }>
              <Text style={{alignSelf: 'center',marginTop:4,fontWeight: 'bold',color: 'white'}}>Book Now</Text>
             </TouchableOpacity> 
         </View>
            </View>
          )}
        />
        )}
      {/* )} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 350,
    marginVertical: 10,
    flexDirection: 'column',
    borderRadius:10,
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'#75c31e',
    shadowColor: '#999',    
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,

  },
  cardImg: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  //  borderRadius:10
  },
  crd: {
    flexDirection: 'row',
    height:160,
    flex: 2,
    padding: 0,
    borderColor: '#ccc',
    // borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    shadowRadius: 10,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    color:'#18191a',
    marginTop:5,
    fontSize:15
  },
  direction:{
    marginTop:10,
    marginLeft:'5%',
    height:30,
    width:90,
    backgroundColor:'#75c31e',
    borderRadius:15,
    marginRight:7

 }, 
 design:{
  // height:40,borderWidth:1,paddingLeft:20,
  //     borderColor:'black',backgroundColor:'white',borderRadius:10
},
abc:{
  flexDirection: 'row',
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: 'green',
  height: 45,
  borderRadius: 12 ,
  marginTop:-5,
  marginBottom:10
}
})

