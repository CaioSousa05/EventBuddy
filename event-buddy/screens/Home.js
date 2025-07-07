import {View,Text,Button, TouchableOpacity, Image} from "react-native"
import { styles } from "../assets/styles"

import { useAuth } from "../context/AuthContext";
import { auth } from '../FirebaseConfig';

export default function Home({ navigation }) {
 const { logout } = useAuth();
  return (

    <View style={styles.container}>
      
      <Text style={styles.title}>{auth.currentUser? "Bem vindo, " + auth.currentUser.email : "Painel Principal"}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Events')}>
        <Text style={styles.buttonText}>Lista de eventos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Favourites')}>
        <Text style={styles.buttonText}>Favoritos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perfil')}>
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}