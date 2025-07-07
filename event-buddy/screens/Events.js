import { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles';
import { database, auth } from '../FirebaseConfig';
import ToastManager, { Toast } from 'toastify-react-native';
import { AntDesign } from '@expo/vector-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export default function Events({ navigation }) {
  const [eventos, setEventos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const uid = auth.currentUser?.uid;

  const lerEventos = async () => {
    try {
      const data = await database.collection('events').get();
      const tmp = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEventos(tmp);
    } catch {
      Toast.error('Erro ao carregar eventos');
    }
  };

  const lerFavoritos = async () => {
    if (!uid) return;
    try {
      const doc = await database.collection('users').doc(uid).get();
      if (doc.exists) {
        setFavoritos(doc.data().favourites || []);
      } else {
        setFavoritos([]);
      }
    } catch (e) {
      console.log('Erro ao carregar favoritos:', e);
    }
  };

  const toggleFavorito = async (eventoId, title) => {
    if (!uid) {
      Toast.error('Você precisa estar logado');
      return;
    }

    const userRef = database.collection('users').doc(uid);
    const jaFavorito = favoritos.includes(eventoId);

    try {
      if (jaFavorito) {
        await userRef.update({
          favourites: firebase.firestore.FieldValue.arrayRemove(eventoId),
        });
        Toast.success(`Removido dos favoritos: ${title}`);
      } else {
        await userRef.set(
          {
            favourites: firebase.firestore.FieldValue.arrayUnion(eventoId),
          },
          { merge: true }
        );
        Toast.success(`Adicionado aos favoritos: ${title}`);
      }
      lerFavoritos(); // Atualiza visualmente
    } catch (e) {
      Toast.error('Erro ao atualizar favoritos');
      console.log(e);
    }
  };

  useEffect(() => {
    lerEventos();
    //lerFavoritos();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          let dataFormatada = 'Data inválida';
          try {
            const data = item.datetime?.toDate
              ? item.datetime.toDate()
              : new Date(item.datetime);
            dataFormatada = data.toLocaleString('pt-PT', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            });
          } catch (e) {
            console.log('Erro ao formatar data:', e);
          }

          const isFav = favoritos.includes(item.id);

          return (
            <TouchableOpacity
              style={styles.eventCard}
              onPress={() => navigation.navigate('EventDetails', { evento: item })}
            >
              <Image source={{ uri: item.imageUrl }} style={styles.eventImageLarge} />
              <View style={styles.eventContentVertical}>
                <Text style={styles.eventTitle}>{item.title}</Text>
                <Text style={styles.eventDate}>{dataFormatada}</Text>
                <TouchableOpacity
                  onPress={() => toggleFavorito(item.id, item.title)}
                  style={styles.favIconRight}
                >
                  <AntDesign
                    name={isFav ? 'heart' : 'hearto'}
                    size={24}
                    color={isFav ? 'red' : '#6b5b95'}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <ToastManager />
    </View>
  );
}
