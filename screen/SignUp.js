import React, {useState} from 'react'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function SignUp({ navigation }) {
  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');
  const [Newusername, setNewUsername] = useState('');
  const [Newpassword, setNewPassword] = useState('')
  const [cpassword, setcpassword] = useState('');
  
  const checkEmpty = () => {
    if(firstName=="") {
      console.log('First Name Required')
    }
    if(lastName=="") {
      console.log('Last Name Required')
    }
    if(Newusername=="") {
      console.log('Username Required')
    }
    if(Newpassword=="") {
      console.log('Password Required')
    }
    if(cpassword=="") {
      console.log('Please Confirm Password')
    }
  
  }

  return (
    <View style={styles.container}>
      <Image
        style={{width:450, height:130, position: "absolute", top: 20}}
        source={require('../assets/woplliLogo2.png')}
      />

      <Text style={{fontSize: 30, fontWeight: 'bold', position: 'absolute', top: 90, padding: 80, left: -50}}>
        Create Account
      </Text>
      <View style={styles.inputView}>
       <TextInput
         style={styles.TextInput}
         placeholder="First Name"
         placeholderTextColor="black"
         onChangeText={(firstName) => setFName(firstName)}
       />
     </View>

     <View style={styles.inputView}>
       <TextInput
         style={styles.TextInput}
         placeholder="Last Name"
         placeholderTextColor="black"
         onChangeText={(lastName) => setLName(lastName)}
       />
     </View>

     <View style={styles.inputView}>
       <TextInput
         style={styles.TextInput}
         placeholder="Username"
         placeholderTextColor="black"
         onChangeText={(Newusername) => setNewUsername(Newusername)}
       />
     </View>

     <View style={styles.inputView}>
       <TextInput
         style={styles.TextInput}
         placeholder="Password"
         placeholderTextColor="black"
         secureTextEntry={true}
         onChangeText={(Newpassword) => setNewPassword(Newpassword)}
       />
     </View>

     <View style={styles.inputView}>
       <TextInput
         style={styles.TextInput}
         placeholder="Confirm Password"
         placeholderTextColor="black"
         secureTextEntry={true}
         onChangeText={(password) => setcpassword(password)}
       />
     </View>

     <TouchableOpacity style={styles.loginButton} onPress={checkEmpty}>
        <Text style={styles.loginText} onPress={() => navigation.navigate("History")} >Sign Up</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: "#dcdee0",
    width: "90%",
    borderRadius: 10,
    height: 45,
    marginBottom: 30,
    alignItems: "left",

  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 2,
    color: 'white',
    
  },
  loginButton: {
    width: "40%",
    borderRadius: 10,
    height: 45,
    marginBottom: 30,
    alignItems: "center",
    backgroundColor: "#163E61",
    position: 'absolute',
    bottom: 130
  },

  loginText: {
    color: "white",
    height: 50,
    padding: 15,
  },
});