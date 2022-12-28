import React,{useEffect,useRef,useState} from 'react'
import { StyleSheet,
  Text,
  Switch,
  StatusBar,
  View,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  DrawerLayoutAndroid,
  Modal,
  BackHandler,
  ImageBackground
} from 'react-native'
import MapView,{Marker,Callout,Circle} from 'react-native-maps';
import { markers , mapDarkStyle, mapStandardStyle } from '../screens/mapData'
import StarRating from './star'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import Ionicons from 'react-native-vector-icons/Ionicons'
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 230;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 -10;

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
const ModalPoup2 = ({visible, children}) => {
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

const Map=(props  ,navigation) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const origin1 = {latitude:21.2251, longitude: 72.8268};
  const destination = {latitude: 21.0411, longitude:71.4488}; 
  const [ pin, setPin ] = useState(
    {
		latitude: 21.1702,
		longitude: 21.1702
    }
  )
  const [ region, setRegion ] =useState({
		latitude: 21.1702,
		longitude: 72.8311,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	})
  function handleBackButtonClick() {
    setVisible2(true);
    return true;
  }
  function Back() {
    BackHandler.exitApp();
    return true;
  }
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []); 
    
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  const navigationView = () => (
    
    <View style={[styles.container1, styles.navigationContainer]}>  
    
     <StatusBar  /> 
    
     <ImageBackground source={require('../images/backk.jpg')} style={{width:'100%'}}>
    
     <View style={{flexDirection:'row'}}>
        <Image source={require('../images/profile.png')}
         style={{height:90,width:90,marginLeft:'35%'}}/> 
         <TouchableOpacity  onPress={() => drawer.current.closeDrawer()}>
            <Ionicons name="chevron-back" size={40} style={{marginLeft:50,marginTop:20,color: '#acd1af'}} />
         </TouchableOpacity>
         
     </View>       
        <Text style={{fontSize:25,marginLeft:10,color:'#ffffff',fontWeight:'bold'}}>
          Welcome Guest
        </Text>
        
     

    <View style={{flexDirection:'row',marginTop:10,marginLeft:5}}> 
        <Ionicons name="mail" size={15} style={{color: '#ffffff',marginLeft:5,marginTop:3}} />
        <Text style={{fontSize:13,marginLeft:7,color:'#ffffff'}}>
           Guest
        </Text>
      </View>
        <View style={{flexDirection:'row',marginTop:5,marginLeft:5,marginBottom:10}}>
          <Ionicons name="call" size={15} style={{color: '#ffffff',marginLeft:5}} />
           <Text style={{fontSize:12,marginLeft:8,color:'#ffffff'}}>
            Guest
           </Text>
        </View>
      
        </ImageBackground>
         <TouchableOpacity style={{marginTop:30}} activeOpacity={0.9} onPress={() => setVisible(true)}>
     <View  style={styles.drawer}>
     <Image source={require('../images/profile.png')} style={{height:45,width:45,marginTop:5}}  />
     <Text style={{fontSize:15,marginTop:16,fontWeight:"bold",marginLeft:10,color:'#000000'}}>My Account</Text>
     </View>
     </TouchableOpacity >

        <TouchableOpacity style={{marginTop:15}} activeOpacity={0.9} onPress={() => setVisible(true)}>
     <View style={styles.drawer}>
     <Image source={require('../images/charging.png')} style={{height:45,width:45,marginTop:5}}  />
     <Text style={{fontSize:15,marginTop:16,fontWeight:"bold",marginLeft:10,color:'#000000'}}> Charging History
     </Text>
     </View>
     </TouchableOpacity >

     <TouchableOpacity style={{marginTop:15}} activeOpacity={0.9} onPress={() => setVisible(true)}>
     <View style={styles.drawer}>
     <Image source={require('../images/location.png')} style={{height:45,width:45,marginTop:5}}  />
     <Text style={{fontSize:15,marginTop:16,fontWeight:"bold",marginLeft:10,color:'#000000'}}>My Loaction</Text>
     </View>
     </TouchableOpacity >

    <TouchableOpacity style={{marginTop:15}} activeOpacity={0.9}  onPress={() => setVisible(true)}>
    <View style={styles.drawer}>
    <Image source={require('../images/service.png')} style={{height:45,width:45,marginTop:5}}  />
    <Text style={{fontSize:15,marginTop:16,fontWeight:"bold",marginLeft:8,color:'#000000'}}> Services</Text>
    </View>
    </TouchableOpacity >

    <TouchableOpacity style={{marginTop:15}} activeOpacity={0.9} onPress={()=>{props.navigation.navigate('help1')}}>
    <View style={styles.drawer}>
    <Image source={require('../images/help.png')} style={{height:45,width:45,marginTop:5}}  />
    <Text style={{fontSize:15,marginTop:16,fontWeight:"bold",marginLeft:10,color:'#000000'}}>Help</Text>
    </View>
    </TouchableOpacity >

    {/* <View style={{marginTop:15}} activeOpacity={0.9}>
    <View  style={styles.drawer}>
    <Image source={require('../images/help.png')} style={{height:45,width:45,marginTop:5}}  />
    <Text style={{fontSize:15,marginTop:16,fontWeight:"bold",marginLeft:10}}>Dark Theme</Text>
    <Switch
        trackColor={{ false: "#c1c1c1", true: "black" }}
        thumbColor={isEnabled ? "grey" : "grey"}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{marginLeft:100}}
      />
    </View>
    </View > */}

    <View style={{justifyContent:'flex-end',flex:1}}>
    <TouchableOpacity onPress={  () => props.navigation.navigate('HomeScreen')} activeOpacity={0.9} style={{marginLeft:-10}}  >
    <View   style={{ flexDirection:"row",
         height:55,width:'100%', 
         backgroundColor:"#fff",
         marginLeft:5,
         shadowColor: '#ccc',
         shadowOffset:{ width: 0, height: 3 },
         shadowOpacity: 0.5,
         shadowRadius: 5,
         elevation: 10,
         borderRadius:10,
         marginBottom:3}}>
    <Image source={require('../images/logout.png')} style={{height:25,width:25,marginTop:14,marginLeft:15}} />
    <Text style={{fontSize:15,marginTop:15,fontWeight:"bold",marginLeft:15,color:'#000000'}}>SignIn  /   SignUp</Text>
    </View>
    </TouchableOpacity >
  
    </View>
    </View>
  
    );
    const [data, setData] = useState([]);
  useEffect(async ()=> {
    try {
     const response = await fetch('http://evspoint.com/api/station');
     const json = await response.json();
     setData(json);
   } catch (error) {
     console.error(error);
    }
 }, []);

  const initialMapState = {
    markers,
  region: {
    latitude: 21.1897,
    longitude: 72.8648,
    latitudeDelta: 10.14864195044303443,
    longitudeDelta: 10.140142817690068,
  },
  };

  const [state, setState] = React.useState(initialMapState);
 
  let mapIndex = 0;
  let mapAnimation= new Animated.Value(0);

  useEffect(()=>{
    mapAnimation.addListener(({ value })=>{
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if(index >= data.length){
        index = data.length - 1;
      }
      if(index <= 0){
        index= 0;
      }
      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() =>{
         if(mapIndex !== index){
           mapIndex = index;
           const { Latitude } = data[index];
           const { Longitude} = data[index];
           _map.current.animateToRegion({
             latitude:Latitude,
             longitude:Longitude,
             latitudeDelta: state.region.latitudeDelta,
             longitudeDelta: state.region.longitudeDelta,
           },
           2000) 
         }
      }, 10)
    })
  })

  const interpolations = data.map((marker, index)=>{
    const inputRange = [
       (index - 1)* CARD_WIDTH,
       index * CARD_WIDTH,
       ((index + 1) * CARD_WIDTH)
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange:[0.8, 1, 0.8],
      extrapolate: "clamp"   
    });
    return { scale };
  });
 
  const onMarkerPress = (mapEventData)=>{
    const markerId = mapEventData._targetInst.return.key

    let x = (markerId * CARD_WIDTH) + (markerId * 20);
       if(Platform.OS === 'android'){
         x = x -SPACING_FOR_CARD_INSET;
       }

       _scrollView.current.scrollTo({x: x, y: 0, animated: true});

  }

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  return  (
    <DrawerLayoutAndroid
    ref={drawer}
    drawerWidth={300}
    drawerPosition={drawerPosition}
    renderNavigationView={navigationView}
    >
      
      <ModalPoup visible={visible}>
         <LottieView  style={{marginTop:-190}}
		       source={require('../images/lf30_editor_ifwaapiv.json')}
		       size={10}
		       autoPlay
		       loop
		     />
         <Text style={{fontWeight: 'bold',alignSelf:'center',marginTop:40,fontSize:30,color:'black'}}> Oops</Text>
         <Text style={{ fontSize: 17,marginTop: 25, textAlign: 'center',color:'black'}}>
        Before Use First You Need
        {'\n'}
          To
         {'\n'}
          Login/Register
         </Text>
         <View style={{justifyContent: 'space-between'}}>
         <TouchableOpacity  onPress={  () => props.navigation.navigate('HomeScreen')} activeOpacity={0.7} style={{ height:40, width:'80%',borderColor:'gray',borderRadius:5,marginTop:20,backgroundColor:'#e84142',alignSelf:'center'}}>
             <Text style={{alignSelf: 'center',color:'white',marginTop:5,fontWeight:'bold',fontSize:20}}>Log in</Text>
         </TouchableOpacity>
         <TouchableOpacity  onPress={  () => props.navigation.navigate('Register')} activeOpacity={0.7} style={{ height:40, width:'80%',backgroundColor:'#e84142',borderRadius:5,marginTop:20,alignSelf:'center'}}>
             <Text style={{alignSelf: 'center',color:'white',fontWeight:'bold',marginTop:5,fontSize:20}}>Register</Text>
         </TouchableOpacity>
         <TouchableOpacity  onPress={() => setVisible(false)} activeOpacity={0.7} style={{height:40, width:'80%',borderWidth:1,borderColor:'gray',borderRadius:5,marginTop:20,alignSelf:'center'}}>
             <Text style={{alignSelf: 'center',color:'grey',fontWeight:'bold',marginTop:5,fontSize:20}}>Cancel</Text>
         </TouchableOpacity>
           </View>
       </ModalPoup>
      
      <ModalPoup2 visible={visible2}>
        
        <Text style={{marginBottom: 10, fontSize: 25, textAlign: 'center',fontWeight:'bold',color:'black'}}>
         Exit
         </Text>
         <Text style={{ fontSize: 17,marginBottom: 20, textAlign: 'center',color:'black'}}>
          Are you want to Exit? 
         </Text>
         <View style={{ flexDirection:'row',justifyContent: 'space-between'}}>
         <TouchableOpacity  onPress={() => setVisible2(false)} activeOpacity={0.7} style={{ height:40, width:'40%',borderWidth:1,borderColor:'gray',borderRadius:5,marginTop:20}}>
             <Text style={{alignSelf: 'center',color:'gray',marginTop:5,fontWeight:'bold',fontSize:20}}>No</Text>
         </TouchableOpacity>
         <TouchableOpacity  onPress={() => Back()} activeOpacity={0.7} style={{ height:40, width:'40%',backgroundColor:'#75c31e',borderRadius:5,marginTop:20}}>
             <Text style={{alignSelf: 'center',color:'white',fontWeight:'bold',marginTop:5,fontSize:20}}>Yes</Text>
         </TouchableOpacity>
           </View>
       </ModalPoup2>
      <View style={styles.container}>
        {/* <StatusBar hidden/> */}
      <MapView

      ref={_map}
      initialRegion={state.region}
      style={styles.container}
      z
      showsUserLocation={true}
      showsMyLocationButton={true}
      
      >
        {/* <MapViewDirections
    origin={origin1}
    destination={destination}
     apikey="AIzaSyAPxVr83wbDkDHrd9WYDb93J6vQ316_4TA"
    strokeWidth={3}
    strokeColor="orange"
  /> */}
        	<Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
				<Marker
					coordinate={pin}
					pinColor="black"
					draggable={true}
					onDragStart={(e) => {
						console.log("Drag start", e.nativeEvent.coordinates)
					}}
					onDragEnd={(e) => {
						setPin({
							latitude: e.nativeEvent.coordinate.latitude,
							longitude: e.nativeEvent.coordinate.longitude
						})
					}}
				>
				</Marker>
        {data.map((marker , index)=>{
          const scaleStyle = { 
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          return(
           <MapView.Marker key={index} coordinate={{latitude:marker.Latitude, longitude:marker.Longitude}} onPress={(e)=>onMarkerPress(e)}>
            <Animated.View style={[styles.markerWrap]}>
                <Animated.Image
                  source={require('../assets/mapmarker1.png')}
                  style={[styles.marker, scaleStyle]}
                  resizeMode="cover"
                />
                  
              </Animated.View>
                 
           </MapView.Marker>
           
          )
        })}     
     </MapView>
     <GooglePlacesAutocomplete 
        
				placeholder="Search Places"
        // placeholderColor='black'
       
				fetchDetails={true}
				GooglePlacesSearchQuery={{
					rankby: "distance"
				}}
				onPress={(data, details = null) => {

					setRegion({
						latitude: details.geometry.location.lat,
						longitude: details.geometry.location.lng,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					})
				}}
				query={{
					key: "AIzaSyAPxVr83wbDkDHrd9WYDb93J6vQ316_4TA",
					language: "en",
					components: "country:ind",
					types: "establishment",
					radius: 3000,
          color:'black'
          
					// location: `${region.latitude}, ${region.longitude}`
				}}
				styles={{
					container: { 
						 position: "absolute",
						  width: "65%",
              borderWidth:2, 
              borderColor:'#777777',
              // height:50,
              borderRadius:8,
              backgroundColor:'#ffffff',
						   zIndex: 1,
						   marginLeft:55,
						  marginTop:17,
              
              
						 },
					listView: { 
						backgroundColor: "black" ,
					}
				}}
			/>
     
     <TouchableOpacity style={{ position:'absolute', 
    marginTop: Platform.OS === 'android' ? 13 : 50, }}
    onPress={() => drawer.current.openDrawer()}>
     
      <Image source={require('../assets/profile.png')} style={{height:55,width:55}}/>
     </TouchableOpacity>
      <View style={{ position:'absolute', 
    marginTop: 18,marginLeft:'80%',height:50,width:45,backgroundColor:'white',borderRadius:35,borderColor:'#75c31e',borderWidth:2}}>

      <TouchableOpacity 
    onPress={() => props.navigation.navigate('stationList1')}>
      <Image source={require('../assets/chargebook.png')} style={{height:30,width:30,marginTop:5,alignSelf:'center'}}/> 
     </TouchableOpacity>
     </View>
     
     <View style={{ position:'absolute', 
    marginTop: 80,marginLeft:'80%',height:50,width:45,backgroundColor:'white',borderRadius:35,borderColor:'#75c31e',borderWidth:2}}>
      <TouchableOpacity 
 
 onPress={() => setVisible(true)}>
        <Ionicons name="calendar" size={32} style={{color: 'green',alignSelf: 'center',marginTop:5}} /> 
     </TouchableOpacity>
     </View>
  
      <Animated.ScrollView
      ref = { _scrollView }
      horizontal
      pagingEnabled
      scrollEventThrottle={1}
      showHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + 20}
      snapToAlignment="center"
      style={styles.scrollView}
      contentInset={{
       top:0, 
       left:SPACING_FOR_CARD_INSET,
       bottom: 0, 
       right: SPACING_FOR_CARD_INSET
      }}
      contentContainerStyle={{
        paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
      }}
      onScroll={Animated.event(
        [
          {
            nativeEvent:{
              contentOffset:{
                x: mapAnimation,
              }
            }
          }
        ],
        {useNativeDriver: true}
      )}
      >
        {data.map((marker,index)=>(
          <View style={styles.card} key ={index}>
            <Image 
             source={{uri:marker.Image}}
              style={styles.cardImage}
              resizeMode="cover"

            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>{marker.StationName}</Text>
              <StarRating ratings={marker.rating} reviews={marker.review} />
              <Text numberOfLines={1} style={styles.cardDescription}>{marker.ownerName}</Text>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={[styles.signIn, {
                    borderColor: 'white',
                    backgroundColor:'#75c31e',
                    borderWidth: 1,
                    borderRadius:7
                  }]}
                >
                  <Text style={[styles.textSign, {
                    color: 'white'
                  }]}>More Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
        

      </Animated.ScrollView>
    </View>
    </DrawerLayoutAndroid>
  )
}
export default Map;

const styles = StyleSheet.create({
    container: {
    flex: 1,
  },
  marker: {
    width: 30,
    height: 30,
  },
  searchBox: {
  position:'absolute', 
  marginTop: Platform.OS === 'android' ? 19 : 50, 
  flexDirection:"row",
  backgroundColor: '#fff',
  height:40,
  width: '60%',
  // alignSelf:'center',
  marginLeft: '15%',
  borderRadius: 5,
  padding: 10,
  shadowColor: '#ccc',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  elevation: 10,
},
      map:{
           ...StyleSheet.absoluteFillObject,          
      },
      bubble:{
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius:6,
        borderColor: '#ccc',
        borderWidth:0.5,
        padding:15,
        width: 150,
      },
      arrow:{
        backgroundColor: 'transparent',
        borderColor:'transparent',
        borderTopColor:'#fff',
        borderWidth:16,
        alignSelf: 'center',
        marginTop:-32,
      },
      arrowBorder:{
        backgroundColor: 'transparent',
        borderColor:'transparent',
        borderTopColor:'#007a87',
        borderWidth:16,
        alignSelf:'center',
        marginTop: -0.5
      },
      scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
      },
      name:{
        fontSize:20,
        marginBottom:5,
      },
      image:{
        width:120,
        height:80,
      },
      chipsScrollView: {
        position:'absolute', 
        top:Platform.OS === 'ios' ? 90 : 80, 
        paddingHorizontal:10
      },
      chipsIcon: {
        marginRight: 5,
      },
      chipsItem: {
        flexDirection:"row",
        backgroundColor:'#fff', 
        borderRadius:20,
        padding:8,
        paddingHorizontal:20, 
        marginHorizontal:10,
        height:35,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 10,       
      },
      card: {
        // padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
      },
      cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
      },
      textContent: {
        flex: 2,
        padding: 10,
      },
      cardtitle: {
        fontSize: 12,
        // marginTop: 5,
        fontWeight: "bold",
        color: '#033E3E',

      },
      cardDescription: {
        fontSize: 12,
        color: "#444",
      },
      button: {
        alignItems: 'center',
        marginTop: 5
      },
      signIn: {
          width: '100%',
          padding:5,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3
      },
      textSign: {
          fontSize: 14,
          fontWeight: 'bold'
      },
      container1: {
        flex: 1,
        padding: 0,
        // marginTop:10
        },
        navigationContainer: {
        backgroundColor: "#ecf0f1",
        },
        paragraph: {
        fontSize: 15,
        // textAlign: "center",
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
          borderWidth:1,
          borderColor:'#75c31e'
        },
        header: {
          width: '100%',
          height: 40,
          alignItems: 'flex-end',
          justifyContent: 'center',
        },
       drawer: {
          flexDirection:"row",
          height:55,width:'95%', 
          backgroundColor:"#fff",
          marginLeft:5,
          shadowColor: '#ccc',
          shadowOffset:{ width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 10,
          borderRadius:10
        },
}) 

