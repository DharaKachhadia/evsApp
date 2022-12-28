import { View, Text,StyleSheet ,TextInput,Button,Alert,Image,TouchableOpacity,Modal,Animated,ActivityIndicator} from 'react-native';
import React,{useState,useEffect} from 'react';
import { StripeProvider } from "@stripe/stripe-react-native";
import { useStripe } from "@stripe/stripe-react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
const Payment = ({route, navigation}) => {


  const [isLoading, setIsLoading] = useState(true);

  const [visible, setVisible] = React.useState(false);
  const name1 = route.params.FirstName+" "+route.params.LastName
  const [amount, setAmount] = useState("120");
  const stripe = useStripe();


  const donate = async () => {
      try {
        const finalAmount = parseInt(amount);
        if (finalAmount < 1) return Alert.alert("You cannot donate below 1 INR");
        const response = await fetch("https://stripepayment123.herokuapp.com/donate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: finalAmount, name:name1 }),
        });
        const data = await response.json();
        if (!response.ok) {
          return Alert.alert(data.message);
        }
        const initSheet = await stripe.initPaymentSheet({
          merchantDisplayName: 'Mahesh Pandav',
          googlePay: true,
          paymentIntentClientSecret: data.clientSecret,
        });
        if (initSheet.error) {
          console.error(initSheet.error);
          return Alert.alert(initSheet.error.message);
        }
        const presentSheet = await stripe.presentPaymentSheet({
          clientSecret: data.clientSecret,
        });
        if (presentSheet.error) {
          console.error(presentSheet.error);
          return Alert.alert(presentSheet.error.message);
        }
        setVisible(true)
      }
       catch (err) {
        console.error(err.message);
        Alert.alert("Payment  failed!");
      }
    };

    useEffect(() => {
      setTimeout(() => {
          setIsLoading(false);
      }, 3000);
  }, []);
  if(isLoading){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#75C31E" />
        </View>
    );
  }       
  return (

    // popup

    <View style={styles.container}>
       <ModalPoup visible={visible}>
      <View style={{alignItems: 'center'}}>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../images/success1.png')}
          style={{height: 120, width: 120, marginVertical: 10}}
        />
      </View>

      <Text style={{marginVertical: 20, fontSize: 20, textAlign: 'center',fontWeight:'bold',color: 'black'}}>
       Your Payment Successfully
      </Text>
      <TouchableOpacity  onPress={()=>{navigation.replace('history')}} activeOpacity={0.7} style={{ alignSelf: 'center',height:40, width:'40%',backgroundColor:'#75c31e',borderRadius:5,marginTop:20}}>
          <Text style={{alignSelf: 'center',color:'white',fontWeight:'bold',marginTop:5,fontSize:20}}>Go History</Text>
      </TouchableOpacity>
    </ModalPoup>

      {/* stripe */}    

     <StripeProvider publishableKey="pk_test_51KOyP1SFGr0qO0IeRouOp5BdOOAaihZxS5LewJlGbXSttSvWjdwUipffeemi3bE1wmQ5vPc0jNCynVJU4zNJnjGr00nA8ykbL3">
      <View>
      <Image
        style={{height:270,width:270,borderRadius:180}}
        source={{uri: 'https://w7.pngwing.com/pngs/562/732/png-transparent-computer-icons-bank-finance-financial-institution-institution-icon-miscellaneous-text-logo.png'}}
        />
      </View>
         <View style={{marginTop:50}}>
         <Text style={{ fontSize: 35 ,color: 'green' }}>{name1}</Text>
         </View>
         {/* <Text>{amount1}</Text> */}

         {/* <View style={styles.inputt}> */}
         {/* <MaterialIcons name="money" type="MaterialIcons" size={25} color="#75C31E" /> */}
         <View style={{flexDirection:'row',marginTop:40}}>
         <Text style={{fontSize:25,color:'black'}}>Pay </Text>
         <Text style={{fontSize:25,color:"black"}}>{amount}</Text>
         </View>
         {/* </View>  */}

         <View style={{height: 50,marginTop:130}}>
         <TouchableOpacity
          style={styles.btn}
          onPress={donate}>
          <Text style={{fontWeight: 'bold', fontSize: 15 , color: 'white'}}>
           Pay 120 RS.
         </Text>
         </TouchableOpacity>
         </View>
    </StripeProvider>
    </View>
  
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
   inputt: {
    borderColor: 'grey',
    borderBottomWidth:1,
    marginTop:70,
    width:'70%',
    flexDirection: 'row',
    alignItems: 'center'
   },
   btn: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    width:280,
    marginTop:25,
    marginBottom:-20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#75C31E'
   },
   amount:{
     width:"70%",

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
})


