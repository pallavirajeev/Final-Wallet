import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react'
import {useForm, Controller } from 'react-hook-form';

export default function ForgotPass({navigation}) {
  const [pword, setpword] = useState('');
  const [cpword, setcpword] = useState('')

  return (

    <View style={styles.container}>
      <Image
        style={{width:140, height:130, position: "absolute", top: 20, left: 130}}
        source={require('../assets/lock2.png')}
      />
     <Text style={{fontSize: 30, position: 'absolute', top: 200, left: 30, width: "200%"}}>
        Forgot Your Password?
     </Text>
     <Text style={{fontSize: 16, position: 'absolute', top: 270, left: 30, width: "200%"}}>
        Note: Use letters, numbers, special characters, and capitalization for a stronger password
     </Text>
     <View style={styles.inputView}>
       <TextInput
         style={styles.TextInput}
         placeholder="New password"
         placeholderTextColor="#FFFFFF"
         onChangeText={(pword) => setpword(pword)}
       />
     </View>
     <View style={styles.inputView}>
       <TextInput
         style={styles.TextInput}
         placeholder="Confirm new password"
         placeholderTextColor="#FFFFFF"
         secureTextEntry={true}
         onChangeText={(cpword) => setcpword(cpword)}
       />
     </View>
     <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Log In")}>
        <Text style={styles.loginText} >Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 120,
    alignItems: 'center',
  
  },
  inputView: {
    backgroundColor: "#949A9E",
    width: "200%",
    borderRadius: 10,
    height: 45,
    marginTop: 250,
    marginBottom: -200,
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
    width: "100%",
    borderRadius: 10,
    height: 45,
    marginBottom: 30,
    alignItems: "center",
    backgroundColor: "#163E61",
    position: 'absolute',
    bottom: 160
  },

  loginText: {
    color: "white",
    height: 50,
    padding: 15,
  },

});
