import { View, Text,Image,Dimensions,StyleSheet,BackHandler,ScrollView, Animated,Modal,TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import React, { useEffect } from 'react';
import {ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import MapView,{Marker,Callout} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from './star';
import LottieView from 'lottie-react-native';

const MIN_HEIGHT = 100;
const MAX_HEIGHT = 350;

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

export default stationDetails = ({route, navigation}) =>{


  const [visible, setVisible] = React.useState(false);

  function handleBackButtonClick() {
    navigation.navigate('Drawer');
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);
   
   const item = route.params.item

  return (
      
    
    <ImageHeaderScrollView
    maxHeight={250}
    minHeight={MIN_HEIGHT}
    minOverlayOpacity={0.4}
    renderHeader={() => <View style={styles.sliderContainer}><Swiper
    autoplay
    horizontal={true}
    height={200}
    activeDotColor="transparent">
       <ModalPoup visible={visible}>
         <LottieView  style={{marginTop:-190}}
		       source={require('../images/lf30_editor_ifwaapiv.json')}
		       size={10}
		       autoPlay
		       loop
		     />
         <Text style={{fontWeight: 'bold',alignSelf:'center',marginTop:40,fontSize:30,color:'black'}}> Oops</Text>
         <Text style={{ fontSize: 17,marginTop: 25, textAlign: 'center',color:'black'}}>
        Before Book First you Need
        {'\n'}
         To
         {'\n'}
          Login/Register
         </Text>
         <View style={{justifyContent: 'space-between'}}>
         <TouchableOpacity  onPress={  () => navigation.navigate('HomeScreen')} activeOpacity={0.7} style={{ height:40, width:'80%',borderColor:'gray',borderRadius:5,marginTop:20,backgroundColor:'#e84142',alignSelf:'center'}}>
             <Text style={{alignSelf: 'center',color:'white',marginTop:5,fontWeight:'bold',fontSize:20}}>Log in</Text>
         </TouchableOpacity>
         <TouchableOpacity  onPress={  () => navigation.navigate('Register')} activeOpacity={0.7} style={{ height:40, width:'80%',backgroundColor:'#e84142',borderRadius:5,marginTop:20,alignSelf:'center'}}>
             <Text style={{alignSelf: 'center',color:'white',fontWeight:'bold',marginTop:5,fontSize:20}}>Register</Text>
         </TouchableOpacity>
         <TouchableOpacity  onPress={() => setVisible(false)} activeOpacity={0.7} style={{height:40, width:'80%',borderWidth:1,borderColor:'gray',borderRadius:5,marginTop:20,alignSelf:'center'}}>
             <Text style={{alignSelf: 'center',color:'grey',fontWeight:'bold',marginTop:5,fontSize:20}}>Cancel</Text>
         </TouchableOpacity>
           </View>
       </ModalPoup>
      
    <View style={styles.slide}>
      <Image
        source={{uri:item.Image}} 
        resizeMode="cover"
        style={styles.sliderImage}
      />
    </View>
    <View style={styles.slide}>
      <Image
        source={{uri:item.Image}} 
        resizeMode="cover"
        style={styles.sliderImage}
      />
    </View>
    <View style={styles.slide}>
     
      <Image
        source={{uri:item.Image}} 
        resizeMode="cover"
        style={styles.sliderImage}
      />
    </View>
  </Swiper></View>}
 
    foregroundParallaxRatio={1}
  >
   
    <View style={{ height: 810,}}>
      <TriggeringView style={styles.section}>
        <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
           <View style={{flexDirection: 'column'}}>
             <Text style={styles.title}>{item.StationName}</Text>
             <View style={{flexDirection: 'row',marginLeft:4,marginBottom:10}}>
             {/* <Text>({itemData.rating})</Text> */}
             {/* <StarRating ratings={itemData.ratings} reviews={itemData.reviews}  /> */}
             </View>
             <View style={{flexDirection: 'row'}}>
             <Ionicons name="person-circle-outline" size={27} style={{color: '#1260cc'}} />
             <Text style={{marginTop:5,marginLeft:4,color:"grey"}}>{item.ownerName}</Text>
             </View>
             <View style={{flexDirection: 'row',marginTop:5}}>
             <Ionicons name="call-sharp" size={23} style={{color: '#1260cc',marginLeft:2}} />
             <Text style={{marginTop:2,marginLeft:5,color:"grey"}}>{item.ContactNo}</Text>
             </View>
           </View>
           <View>
           <View style={styles.rate1}>
           <View style={{flexDirection: 'row',alignSelf:'center',marginTop:5}}>
               <Text style={{color:'white',fontSize:13,marginRight:5,fontWeight:'bold'}}>{item.rating}</Text>
               <Ionicons name="star" size={12} style={{color: 'white',marginTop:3}} />              
            </View>
            </View>
            <View style={styles.rate2}>
            <View style={{alignSelf:'center'}}>
               <Text style={{color:'green',alignSelf:'center',fontSize:13,marginRight:5,fontWeight:'bold'}}>{item.review}</Text>   
               <Text style={{fontSize:10,color:'green',fontWeight:'bold'}}>Reviews</Text>         
            </View>
            </View>
            </View>
        </View>
      </TriggeringView>
      <View style={{ borderBottomWidth: 1,borderBottomColor: '#cccccc',}}>
        <View style={{flexDirection: 'row'}}>
           <Ionicons name="location" size={23} style={{color: '#1260cc',marginLeft:20,marginTop:15}} />
           <Text style={{marginLeft:5,marginTop:10,marginBottom:10,color:"grey"}}>{item.address}</Text>
        </View>
       
        <View style={{flexDirection: 'row',marginTop:-5}}>
           <Ionicons name="time" size={20} style={{color: '#1260cc',marginLeft:23,marginTop:15}} />
           <Text style={{color:'green',marginLeft:5,marginTop:15,marginBottom:10}}>{item.openingTime} To {item.closeTime}</Text>
        </View>
       
      </View>
      <View style={{
    height: 250,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',}}>
     <MapView 
     style={{flex:1}}  
      region={{
        latitude: item.Latitude,
        longitude: item.Longitude,
        latitudeDelta: 0.00864195044303443,
        longitudeDelta: 0.000142817690068
     }}>
      <MapView.Marker         
          coordinate={{latitude:item.Latitude,longitude:item.Longitude}}
          image={require('../assets/mapmarker.png')}
      />
     </MapView>
     </View>

        <View>
          <Text style={{fontSize:20,marginTop:10,fontWeight:'bold',alignSelf: 'center',color:'#505050'}}>Available-Plugs</Text>
        <ScrollView
         horizontal 
        showsHorizontalScrollIndicator={false}
        >
        <View style={{ borderBottomWidth: 1,borderBottomColor: '#cccccc',flexDirection: 'row'}}>
        
        
          <View style={styles.plug}>
          <View style={styles.plug1}> 
          <Text style={styles.plugFont}>Charge</Text>
          </View> 
            
          <Text style={{alignSelf: 'center',marginTop:50,color:'green',fontWeight:'bold',fontSize:18}}>{item.plug1}</Text>
           </View> 
     
          <View style={styles.plug}>
          <View style={styles.plug1}> 
          <Text style={styles.plugFont}>Charge</Text>
          </View> 
          <Text style={{alignSelf: 'center',marginTop:50,color:'green',fontWeight:'bold',fontSize:18}}>{item.Plug2}</Text>
           </View> 
       
          <View style={styles.plug}>
          <View style={styles.plug1}> 
          <Text style={styles.plugFont}>Charge</Text>
          </View> 
          <Text style={{alignSelf: 'center',marginTop:50,color:'green',fontWeight:'bold',fontSize:18}}>{item.plug1}</Text>
           </View> 
       
          {/* <View style={styles.plug}>
          <View style={styles.plug1}> 
          <Text style={styles.plugFont}>Charge</Text>
          </View>  */}
          {/* <Image source={itemData.four} style={styles.img} /> */}
           {/* </View>  */}
        
      </View>
      </ScrollView>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Booking',{item})}
       style={styles.book}>
      <Text style={{fontWeight:'bold',marginTop:5,fontSize:20,color:'white',alignSelf:'center'}}>Book Now</Text>
      </TouchableOpacity> */}
      <TouchableOpacity   onPress={() => setVisible(true)} activeOpacity={0.9} >
    <View style={{height: 50}}>
    <LinearGradient colors={['#88d840','#75C31E','#4c9a2a']} style={styles.book}>
   <Text style={{fontWeight:'bold',marginTop:5,fontSize:20,color:'white',alignSelf:'center'}}>
   Book Now
   </Text>
  </LinearGradient> 
    {/* <TouchableOpacity
     style={[styles.btn,{backgroundColor: '#75C31E',}]}
     onPress={() => sendCred(props)}>
    <Text style={{fontWeight: 'bold', fontSize: 15 , color: 'white'}}>Login</Text>
    </TouchableOpacity> */}
    </View>
  </TouchableOpacity>
      </View> 

    </View>
  
  </ImageHeaderScrollView>
  
  );
}
    
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    color:'#505050',
    fontWeight: 'bold',
    // marginBottom:10
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
    
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 300,
  },
  plug:{
    height:170,
    width:120,
    marginLeft:20,
    marginTop:20,
    marginBottom:20,
    borderRadius:20,
    backgroundColor:'white',
    // marginTopshadowColor: '#999',    
    shadowOffset: {width: 0, height: 1},
     shadowOpacity: 0.8,
     shadowRadius: 20,
     elevation: 5 
    
  },
plug1:{
  height:40,
  backgroundColor: '#1260cc',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
//   borderBottomEndRadius:0,
//  borderBottomLeftRadius:0

},
plugFont:{
color: 'white',
fontSize:20,
fontWeight: 'bold',
marginTop:5,
alignSelf: 'center'
},
img:{
height:90,
width:90,
alignSelf: 'center',
marginTop:15,
},
img1:{
  height:50,
  width:50,
  alignSelf: 'center',
  marginTop:35},

  
  sliderContainer: {
    height: 350,
    width: '100%',
    marginTop: 0,
    justifyContent: 'center',
    alignSelf: 'center',   
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  
  },
  sliderImage: {
    height:350,
    width: '100%',
    alignSelf: 'center',
  
  },
  rate1:{
    marginTop:5,
    height:30,
    width:50,
    backgroundColor:'#158415',
    borderTopLeftRadius:7,
    borderTopRightRadius:7,
  },
  rate2:{
    height:35,
    width:50,
    backgroundColor:'white',
    borderBottomLeftRadius:7,
    borderBottomRightRadius:7,
    shadowColor: '#999',    
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5
},
book:{
  height:40,
  width:'80%',
  marginTop:20,
  alignSelf:'center',
  backgroundColor:'#75c31e',
  borderRadius:10
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
  borderRadius: 10,
  elevation: 20,
  borderColor:'#75c31e'
},
});