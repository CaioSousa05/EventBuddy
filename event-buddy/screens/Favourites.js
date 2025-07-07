import { TouchableOpacity } from 'react-native';
import { View, Text, Button, Image } from 'react-native';
import { styles } from '../assets/styles';
import { auth } from '../FirebaseConfig';

export default function Favourites({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{auth.currentUser? "Bem vindo, " + auth.currentUser.email : "Painel Principal"}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registo')}>
        <Text style={styles.buttonText}>Registo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}
