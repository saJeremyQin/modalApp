import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Alert, Button, Modal, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';

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
  return (
    <View style={styles.body}>

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

      <Pressable 
        onPress={onPress}
        // delayLongPress={2000}
        hitSlop = {{left:20,right:20}}
        android_ripple = {{color:"#00f"}}
        style = { ({ pressed }) => [
          { backgroundColor: pressed ? '#ddd' : '#00ff00'},
          styles.button
        ]}
      >
        <Text style={styles.text}>
          {IsSubmitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>
      {
        IsSubmitted ? (
          <Text style={[styles.text,{marginTop:10}]}>
            You are registered as {name}
          </Text>          
        ) :
        (
          <Image style={styles.image}
            source={require('./assets/error.png')}
            resizeMode="stretch"
          />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
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
  button:{
    width:150,
    height:50,
    // backgroundColor: "#00ff00",
    alignItems:'center',
    borderRadius:5
  },
  text:{
    fontSize:20,
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
