import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "./styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [accessCode, setAccessCode] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso");
      navigation.navigate("Residente");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>SIGN IN</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="white"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.link}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Login;
