import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Alert, Button, Modal, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View, ImageBackground } from 'react-native';
import JereButton from './components/JereButton'
import Header from './components/Header'

export default function App() {
  const [name,setName] = useState('');
  const [IsSubmitted, setIsSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const onPress = () => {
    if(name.length > 3) {
      setIsSubmitted(!IsSubmitted);
    } else {
      setShowWarning(true);
      // Alert.alert(
      //   'Warning', 
      //   'The name length must be longer than 3 characters',
      //   [
      //     {
      //       text: "Later",
      //       onPress: () => console.warn("Don't show again Pressed"),
      //     },
      //     {
      //       text: "Cancel",
      //       onPress: () => console.warn("Cancel Pressed"),
      //       style: "cancel"
      //     },
      //     { 
      //       text: "OK", 
      //       onPress: () => console.warn("OK Pressed")
      //     }
      //   ],
      //   {
      //     cancelable:true,
      //     onDismiss: () => console.log('Alert dismissed.')
      //   }
      // );
      ToastAndroid.showWithGravity(
        'The name length must be longer than 3 characters',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      )
    }
  }
  //const Btitle = IsSubmitted ? 'Clear' : 'Submit';

  return (
    <ImageBackground 
      style={styles.body}
      source={require('./assets/bg.jpeg')}
      resizeMode="stretch">

      <Header />
      <Modal
        visible={showWarning}
        transparent={true}
        onRequestClose={() => setShowWarning(false)}
        animationType="slide"
      >
        <View style={styles.centeredView}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>The name length must be longer than 3 characters!</Text>
            </View>
            <Pressable
              style={styles.warning_button}
              onPress={()=> setShowWarning(false) }
              android_ripple = {{color:"#00f"}}
            >        
                <Text style={styles.text}>OK</Text>
            </Pressable>
            </View>
        </View>
      </Modal>

      <Text style={[styles.text,{marginTop:30}]}>
        Please input your name:
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={(value) => {setName(value)}}
        // secureTextEntry
        // keyboardType="numeric"
        // maxLength={5}
        // editable={false}
        // multiline
      />
      {/* <Button 
        title={IsSubmitted ? 'Clear' : 'Submit'}
        onPress={onPress}
        disabled={IsSubmitted}
      />
      */}


      <JereButton onPress={onPress} title={IsSubmitted ? 'Clear' : 'Submit'} color={"#229922"}/>
      <JereButton onPress={()=>onPress()}
        title={'Norway'} 
        color={'purple'} 
        style={{margin:10}}
      />
      {/* <JereButton onPress={()=>onPress()} title={Btitle}/> */}
      
      {
        IsSubmitted ? (
          <View style={styles.body}>
            <Text style={[styles.text]}>
              You are registered as {name}
            </Text>
            <Image style={styles.image}
              source={require('./assets/done.png')}
              resizeMode="stretch"
            /> 
          </View>         
        ) :
        (
          <Image style={styles.image}
            // source={require('./assets/error.png')}
            source={{uri:'https://pixabay.com/get/g80d4c20344d63d01aafc6964a0a4e95bcbddf18ab26a42300e1088646d72b3b7d87825c0d9f8d05c12f43798e00e589de63214d6a824fa7e444e58a9a58f50ecba74a542decda133ada794ea7031e1c3_640.png'}}
            resizeMode="stretch"
            // blurRadius={15}
          />
        )
      }
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  centeredView: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#00000099"
  },
  warning_modal:{
    width:300,
    height:300,
    backgroundColor:"#fff",
    borderRadius:10,
    borderWidth:1,
    borderColor:"purple"
  },
  warning_title:{
    // flex:1,
    backgroundColor:"skyblue",
    height:50,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },
  warning_body:{
    // height:200,
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  warning_button:{
    // flex:1,
    backgroundColor:"#2ff",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  text:{
    fontSize:24,
    color:"black",
    margin:5,
    textAlign:"center"
    // paddingVertical:10
  },
  input:{
    width:200,
    height:40,
    borderWidth:1,
    borderColor:"#555",
    borderRadius:5,
    textAlign:"center",
    fontSize: 20,
    marginBottom:10
  },
  image:{
    width:100,
    height:100,
    marginTop:10
  }
});
