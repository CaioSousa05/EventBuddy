import { TouchableOpacity } from 'react-native';
import { View, Text, Button, Image } from 'react-native';
import { styles } from '../assets/styles';
import { auth } from '../FirebaseConfig';
import { useAuth } from "../context/AuthContext";

export default function Perfil({ navigation }) {
  const { logout } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{auth.currentUser? "Bem vindo, " + auth.currentUser.email : "Painel Principal"}</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
        logout();
        setTimeout(() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        }, 10);
        
  }}
>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
