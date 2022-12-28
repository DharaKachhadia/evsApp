// import { View, Text,FlatList,StyleSheet } from 'react-native'
// import React ,{useState,useEffect}from 'react'

// const mapData = () => {

//   const [data, setData] = useState([]);

  
//   useEffect(() => {
//     getMovies();
//   }, []);


//   const getMovies = async () => {
//      try {
//       const response = await fetch('https://evspointapp.herokuapp.com/station');
//       const json = await response.json();
//       setData(json);
//     } catch (error) {
//       console.error(error);
//     // } finally {
//     //   // setLoading(false);
//      }
//   }
//   return (
//     <View>
//          <FlatList 
//            showsVerticalScrollIndicator={false}
//            data={data}
//            keyExtractor={item=>item.id}
//            renderItem={({ item }) => 
//            (
//            <View>

//              <Image source={{uri:item.Image}}  resizeMode="cover" style={styles.cardImg}/>
 
//            </View>
//            )}
         
//          />
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   cardImg: {
//     height: '100%',
//     width: '100%',
//     borderTopLeftRadius:10,
//     borderTopRightRadius:10,
//   //  borderRadius:10
//   },
// })

// export default mapData;





const Images = [
  { image: require("../assets/charge1.jpg")},
  { image: require("../assets/charge2.jpg")},
  { image: require("../assets/charge3.jpg")},
  { image: require("../assets/charge4.jpg")},
  { image: require("../assets/charge5.jpg")},
  {image: require("../assets/one.png")},
  {image: require("../assets/two.png")}, 
  {image: require("../assets/three.png")},  
  {image: require("../assets/four.png")},  
  {image: require("../assets/one.png")},
];

export const markers = 

[
{ id :'1',
  coordinate: {
    latitude: 24.860966,
    longitude: 66.990501,
  },
  title: "Maruti Vehicle Charge Station",
  description: "This is the best Vehicle Charge place",
  address1:"257,KuberNagar,                        Katargam,surat-395004,Gujarat,India",
  owner:"Rutikbhai Ghaskata",
  phone:"+917984030827",
  image: Images[0].image,
  image1: Images[1].image,
  image2: Images[2].image,
  rating: 4.2,
  reviews: 99,
  address:'https://goo.gl/maps/93XEQJXaSSaZydr27',
  Timing:"6:00am To 9:00pm", 
  prices:"150$",
  Plug:[
  {
    Plug:"AC Type-1",
    Price:"112 rs",
    Time:"60 Min"
  },
  {
    Plug:"CCS-1",
    Price:"125s rs",
    Time:"55 Min"
  },
  {
    Plug:"CHAdeMO",
    Price:"132 rs",
    Time:"50 Min"
  }],
  one :Images[5].image,
  two :Images[6].image,
  three :Images[7].image,
  four :Images[8].image,
  five:Images[6].image
  
},
{
  id :'2',
  coordinate: {
    latitude:23.033863,
    longitude: 72.585022,
  },
  title: "Reliance Charge Station",
  description: "This is the best Vehicle Charge place",
  address1:"Shop-3,Deluxe Apartment,    Ved-Road,surat-395004,Gujarat,India",
  owner:"Jayeshbhai Shah",
  phone:"+919425761548",
  image: Images[1].image,
  image1: Images[3].image,
  image2: Images[2].image,
  rating: 4.9,
  reviews: 102,
  address:'https://goo.gl/maps/dq4JYRHAT3XDnsaH6',
  Timing:"7:00am To 10:00pm",  
  prices:"180$",
  Plug:[
    {
      Plug:"AC Type-1",
      Price:"112 rs",
      Time:"60 Min"
    },
    {
      Plug:"CCS-1",
      Price:"125s rs",
      Time:"55 Min"
    },
    {
      Plug:"CHAdeMO",
      Price:"132 rs",
      Time:"50 Min"
    }],
  one :Images[5].image,
  two :Images[8].image,
  three :Images[7].image,
  four :Images[6].image,  
},
{
  id :'3',
  coordinate: {
    latitude: 19.076090,
    longitude: 72.877426,
  },
  title: "Tata Car-Charging Station",
  description: "This is the best Vehicle Charge place",
  address1:"103,ThePlanetsoft,                             TimeSquare,surat,Gujarat,India",
  owner:"Rameshbhai Patel",
  phone:"+915674524987",
  image: Images[2].image,
  image1: Images[1].image,
  image2: Images[2].image,
  rating: 3.4,
  reviews: 220,
  address:'https://maps.app.goo.gl/ku2F6LBXnWpieq3D6',
  Timing:"9:00am To 6:00pm", 
  prices:"200$", 
  Plug:[
    {
      Plug:"AC Type-1",
      Price:"112 rs",
      Time:"60 Min"
    },
    {
      Plug:"CCS-1",
      Price:"125s rs",
      Time:"55 Min"
    },
    {
      Plug:"CHAdeMO",
      Price:"132 rs",
      Time:"50 Min"
    }],
  one :Images[8].image,
  two :Images[7].image,
  three :Images[5].image,
  four :Images[6].image,     
},
{
  id :'4',
  coordinate: {
    latitude:22.7196,
    longitude:  75.8577,
  },
  title: "Indian Vehicle-Charging Station",
  description: "This is the best Vehicle Charge place",
  address1:"Vraj-Vihar,Sartana-Jakatnaka,                        surat-395006,Gujarat,India",
  owner:"Hasmukhbhai Jethva",
  phone:"+918452169875",
  image: Images[3].image,
  image1: Images[1].image,
  image2: Images[2].image,
  rating: 4.6,
  reviews: 48,
  address:'https://goo.gl/maps/ezJK1BTq8g7kwHT1A',
  Timing:"8:00am To 8:00pm",
  prices:"250$",
  Plug:[
    {
      Plug:"AC Type-1",
      Price:"112 rs",
      Time:"60 Min"
    },
    {
      Plug:"CCS-1",
      Price:"125s rs",
      Time:"55 Min"
    },
    {
      Plug:"CHAdeMO",
      Price:"132 rs",
      Time:"50 Min"
    }],
  one :Images[5].image,    
  two :Images[4].image,
  three :Images[8].image,
  four :Images[6].image,
  five:Images[7].image 
},
{
  id :'5',
  coordinate: {
     latitude: 26.9124,
     longitude: 75.7873,
  },
  title: "JayMataji Vehicle-Charging Station",
  description: "This is the best Vehicle Charge place", 
  address1:"shop:15,Podar-market,near Surat-Railway Station,   surat ,gujarat",
  owner:"Bharatbhai Modi",
  phone:"+918464587875",
  image: Images[4].image,
  image1: Images[1].image,
  image2: Images[2].image,
  rating: 4.1,
  reviews: 178,
  address:'https://maps.app.goo.gl/uzb9UcV4AqV4JDsD9', 
  Timing:"24 Hours Open",
  prices:"280$",
  Plug:[
    {
      Plug:"AC Type-1",
      Price:"112 rs",
      Time:"60 Min"
    },
    {
      Plug:"CCS-1",
      Price:"125s rs",
      Time:"55 Min"
    },
    {
      Plug:"CHAdeMO",
      Price:"132 rs",
      Time:"50 Min"
    }],
  one :Images[7].image,   
  two :Images[6].image,
   
},
{ id :'6',
coordinate: {
  latitude: 26.2389,
  longitude:73.0243,
},
title: "OM sai nath Charge Station",
description: "This is the best Vehicle Charge place",
address1:"Shop-2,Groundfloor,ZX mall,,Amroli Char-rasta,surat-395006,Gujarat,India",
owner:"Ravibhai Usadadiya",
phone:"+919482687549",
image: Images[0].image,
image1: Images[1].image,
image2: Images[2].image,
rating: 3.9,
reviews: 99,
address:'https://goo.gl/maps/wrPdZBBJ51MjDG387',
Timing:"24 Hours Open",
prices:"120$",
Plug:[
  {
    Plug:"AC Type-1",
    Price:"112 rs",
    Time:"60 Min"
  },
  {
    Plug:"CCS-1",
    Price:"125s rs",
    Time:"55 Min"
  },
  {
    Plug:"CHAdeMO",
    Price:"132 rs",
    Time:"50 Min"
  }],
one :Images[8].image,   
two :Images[7].image,
three :Images[5].image,
},
{ id :'7',
coordinate: {
latitude: 22.47,
longitude:  70.07,
},
title: "Hare Krishana Charge Station",
description: "This is the best Vehicle Charge place",
address1:"Arya Samaj Rd,Shankar Tekri,                        jamnagar,Gujarat,India",
owner:"Bhadreshbhai Sutariya",
phone:"+919657812687",
image: Images[3].image,
image1: Images[1].image,
image2: Images[2].image,
rating: 4.4,
reviews: 99,
address:'https://goo.gl/maps/aaDHENR1JBZNsCr3A',
Timing:"8:30am To 10:00pm",
prices:"320$",
Plug:[
{
  Plug:"AC Type-1",
  Price:"112 rs",
  Time:"60 Min"
},
{
  Plug:"CCS-1",
  Price:"125s rs",
  Time:"55 Min"
},
{
  Plug:"CHAdeMO",
  Price:"132 rs",
  Time:"50 Min"
}],
one :Images[5].image,
three :Images[6].image,
four :Images[8].image,
five:Images[7].image
},
];

export const mapDarkStyle = [
{
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#212121"
    }
  ]
},
{
  "elementType": "labels.icon",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#757575"
    }
  ]
},
{
  "elementType": "labels.text.stroke",
  "stylers": [
    {
      "color": "#212121"
    }
  ]
},
{
  "featureType": "administrative",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#757575"
    }
  ]
},
{
  "featureType": "administrative.country",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#9e9e9e"
    }
  ]
},
{
  "featureType": "administrative.land_parcel",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "administrative.locality",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#bdbdbd"
    }
  ]
},
{
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#757575"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#181818"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#616161"
    }
  ]
},
{
  "featureType": "poi.park",
  "elementType": "labels.text.stroke",
  "stylers": [
    {
      "color": "#1b1b1b"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#2c2c2c"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#8a8a8a"
    }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#373737"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#3c3c3c"
    }
  ]
},
{
  "featureType": "road.highway.controlled_access",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#4e4e4e"
    }
  ]
},
{
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#616161"
    }
  ]
},
{
  "featureType": "transit",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#757575"
    }
  ]
},
{
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#000000"
    }
  ]
},
{
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [
    {
      "color": "#3d3d3d"
    }
  ]
}
];

export const mapStandardStyle = [
{
  "elementType": "labels.icon",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
];