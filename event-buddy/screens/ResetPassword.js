import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../assets/styles';
import { useState } from 'react';
import { auth } from '../FirebaseConfig';

export default function ResetPassword({ navigation }) {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    auth.sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Sucesso', 'Email de recuperação enviado!');
        navigation.goBack();
      })
      .catch(error => {
        Alert.alert('Erro', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar palavra-passe</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Mandar email</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Voltar ao Login</Text>
      </TouchableOpacity>
    </View>
  );
}
