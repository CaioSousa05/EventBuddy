import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f4fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  containerScroll: {
    flex: 1,
    backgroundColor: '#f5f4fa',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#4b3f72',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    marginBottom: 15,
    color: '#4b3f72',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6b5b95',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
    backgroundColor: '#dcdcdc',
  },
  input: {
    backgroundColor: '#fff',
    color: '#333',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginVertical: 8,
    width: 200,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tarefaItem: {
    backgroundColor: '#ffffff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    elevation: 2,
  },
  descricao: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },

  // Eventos
  eventCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 16,
    width: '100%',
    elevation: 3,
  },
  eventImageLarge: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  eventContentVertical: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4b3f72',
    marginBottom: 10,
  },
  eventDate: {
    fontSize: 16,
    color: '#777',
    marginBottom: 12,
  },
  eventDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
  favIconRight: {
    alignSelf: 'flex-end',
  },
  mapButton: {
    backgroundColor: '#ff8c42',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  subscribeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
});
