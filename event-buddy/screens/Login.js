import React, { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";
import { styles } from '../assets/styles';
import { signIn } from "../services/FirebaseAuth";
import { useAuth } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth();

  const handleLogin = async () => {
    try {
      await signIn(email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.text}>Não tem conta? Registar-se</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.text}>Esqueceu palavra-passe?</Text>
      </TouchableOpacity>
    </View>
  );
}
