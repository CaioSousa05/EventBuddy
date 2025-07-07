import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../assets/styles';
import 'firebase/firestore';
import { auth, database } from '../FirebaseConfig';
import { Toast } from 'toastify-react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



export default function EventDetails({ route }) {
  const { evento } = route.params;

  const abrirLocalizacao = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${evento.location.latitude},${evento.location.longitude}`;
    Linking.openURL(url);
  };

  const inscreverEvento = async (eventoId) => {
    const uid = auth.currentUser?.uid;
      if (!uid) {
        Toast.error('É necessário estar autenticado para se inscrever.');
        return;
      }
      

      try {
        await
        database.collection('events')
        .doc(eventoId)
        .update({
          participants: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.uid)
        });


        Toast.success('Inscrição realizada com sucesso!');
      } catch (error) {
        console.error(eventoId, error);
        Toast.error('Erro ao inscrever-se no evento.');
    }
};

  return (
    <View style={styles.containerScroll}>
      <Image source={{ uri: evento.imageUrl }} style={styles.eventImageLarge} />
      <Text style={styles.eventTitle}>{evento.title}</Text>

      <Text style={styles.eventDate}>
        {evento.datetime?.toDate
          ? evento.datetime.toDate().toLocaleString('pt-PT')
          : new Date(evento.datetime).toLocaleString('pt-PT')}
      </Text>

      <Text style={styles.eventDescription}>{evento.description}</Text>

      <TouchableOpacity style={styles.mapButton} onPress={abrirLocalizacao}>
        <Text style={styles.buttonText}>Ver Localização no Mapa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subscribeButton} onPress={() => inscreverEvento(evento.id)}>
        <Text style={styles.buttonText}>Inscrever-se no Evento</Text>
      </TouchableOpacity>
    </View>
  );
}
