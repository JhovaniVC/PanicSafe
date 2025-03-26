import React, { useState } from "react";
import { View, TextInput, Text, ImageBackground, TouchableOpacity } from "react-native";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./styles";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [accessCode, setAccessCode] = useState("");

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registro exitoso");
      navigation.navigate("Login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ImageBackground source={require("../../assets/background.jpg")} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>SIGN UP</Text>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} placeholderTextColor="white" />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} placeholderTextColor="white" />
        {/* <TextInput placeholder="Access code" value={accessCode} onChangeText={setAccessCode} style={styles.input} placeholderTextColor="white" /> */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Already have an account? Sign in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Register;