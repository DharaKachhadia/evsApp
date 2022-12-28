import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Linking} from 'react-native';

import StarRating from './star';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Card = ({itemData, onPress,onPress1,onPress2}) => {
  return (
    
      <View style={styles.card}>
         <TouchableOpacity onPress={onPress}  style={styles.crd} activeOpacity={0.7}>
        <Image
            source={itemData.image}
            resizeMode="cover"
            style={styles.cardImg}
          />
         </TouchableOpacity>
         
        <View style={{height:110,borderBottomWidth:1,borderRadius:5,borderColor:'grey'}}>
        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
          <View style={{marginLeft:10}}>
           <Text style={styles.cardTitle}>{itemData.title}</Text> 
           <StarRating ratings={itemData.rating} reviews={itemData.reviews} />
        <View style={{flexDirection: 'row'}}>
           <Ionicons name="location" size={20} style={{color: 'grey',marginTop:10,marginLeft:-5}} />
           <Text  style={{marginTop:3,color: '#242526',fontSize:12}}>{itemData.address1}</Text>
        </View>
        <View style={{flexDirection: 'row',marginTop:4}}>
           <Ionicons name="time-outline" size={15} style={{color: '#242526',marginLeft:-3,marginTop:1}} />
           <Text style={{color:'green',fontSize:12,marginTop:1,marginLeft:3}}>{itemData.Timing}</Text>
        </View>
          </View>
          <View style={{height:23,width:45,backgroundColor:'#158415',marginRight:10,marginTop:7,borderRadius:7}}>
            <View style={{alignSelf:'center',flexDirection: 'row',marginTop:1}}>
               <Text style={{color:'white',fontSize:13,marginRight:5,fontWeight:'bold'}}>{itemData.rating}</Text>
               <Ionicons name="star" size={12} style={{color: 'white',marginTop:3}} />              
            </View>
           </View> 
        </View>
        </View>
         <View style={{height:50,flexDirection: 'row',justifyContent: 'space-between'}}>
       <TouchableOpacity style={{flexDirection: 'row'}}
        onPress={()=>Linking.openURL(itemData.address)}
        activeOpacity={0.7}>
       <Image source={require('../assets/direction.png')}style={{height:40,width:40,marginTop:7}}/> 
      
       <Text style={{marginTop:13}}>
        Direction
       </Text>
        </TouchableOpacity >
         <TouchableOpacity onPress={onPress1} style={styles.direction} activeOpacity={0.7}>
              <Text style={{alignSelf: 'center',marginTop:4,fontWeight: 'bold',color: 'white'}}>Book Now</Text>
             </TouchableOpacity> 
         </View>
      </View>
  );
};

export default Card;

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
  cardImgWrapper: {
    flex: 1,
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
  cardInfo: {
    marginLeft:10,
    marginTop:10
  },
  cardTitle: {
    fontWeight: 'bold',
    color:'#18191a',
    marginTop:5,
    fontSize:15
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
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
});