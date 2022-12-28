
import React, { Component } from 'react';
import { Text, View,Image,StyleSheet,Dimensions,BackHandler ,ToastAndroid,LogBox} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      initialRegion:{
        latitude:21.1897,
        longitude:72.8648,
        latitudeDelta:30.025,
        longitudeDelta:Dimensions.get('window').width/Dimensions.get('window').height
      }
    }
  }
  componentDidMount() {
      this.handleUserLocation();
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
    this.props.navigation.replace('Drawer1');
    return true;
}
   handleUserLocation=()=> {
    //  alert("executed")
        Geolocation.getCurrentPosition(pos =>{
          //  alert(JSON.stringify(pos))   
          this.map.animateToRegion({
            ...this.state.initialRegion,
            latitude:pos.coords.latitude,
            longitude:pos.coords.longitude
          })
            this.setState({
              ...this.state.initialRegion,
              latitude:pos.coords.latitude,
              longitude:pos.coords.longitude 
            })
        },
        error=>{
          console.log(error);
          alert("Please give location permisssion this App to show Your Location")
        }
        )
   }


  onChangeValue = initialRegion =>{
   ToastAndroid.show(JSON.stringify(initialRegion),ToastAndroid.SHORT)
    this.setState({
      initialRegion
    })
  }
  render() {
    LogBox.ignoreAllLogs(true)



    
    return (
      <View style={{flex: 1}}>
      <View style={{flex: 1}}>
      <MapView
      style={{flex:1}}
      showsUserLocation={true}
      showsMyLocationButton={true}
      initialRegion = {this.state.region}
      // onRegionChangeComplete={this.onChangeValue}
      ref={ref=>this.map=ref}
      />
      <View
       style={{top:'50%', left:'50%',marginLeft:-24,marginTop:-48,position:'absolute'}}>
       <Image source={require('../assets/mapmarker1.png')}style={{height:40,width:40}}/> 
      </View>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff'
  },
  mapContainer:{
    height:'50%',
    width:'100%',
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  fullMapContainer:{
    flex: 1
  },
  map:{
    ...StyleSheet.absoluteFillObject,
    height:'100%',
    width:'100%',
    justifyContent:'flex-end',
    alignItems: 'center',
  },
  fullMap:{
    ...StyleSheet.absoluteFillObject,
  }
})
