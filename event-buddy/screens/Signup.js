import React, { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";
import { styles } from '../assets/styles';
import { signUp } from "../services/FirebaseAuth";

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Sign up your account</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Registar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Já tem conta? Login</Text>
      </TouchableOpacity>
    </View>
    
    /*
    <View style={{ padding: 20 }}>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} style={{ borderWidth: 1 }} />
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1 }} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
    */
  );
}
