import react, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { db } from './src/config/firebaseconfig';
import { collection, addDoc, getDocs } from "firebase/firestore";


const App = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const adicionar = () => {
    addDoc(collection(db, "usuarios"), 
    {
      nome: nome,
      email: email,
      senha: senha
    })
    .then( () => {
      console.log("Usuário cadastrado com sucesso!")
    })
    .catch(error => {
      setNome('');
      setEmail('');
      setSenha('');
      console.log(error);
  })}

  const ver = () => {
    const dados = getDocs(collection(db, "usuarios"));
    dados.forEach((doc) => { // ERRO AQUI
      console.log(`${doc.id} => ${doc.data()}`);
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cloud Firestore</Text>   
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="nome"/>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="e-mail"/>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="senha"
        secureTextEntry={true}/>
      <TouchableOpacity
        style={styles.button}
        onPress={adicionar}>
            <Text style={styles.textButton}>Adicionar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={ver}>
            <Text style={styles.textButton}>Ver dados</Text>
      </TouchableOpacity>  
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 20,  
  }, 
  input: {
    height: 44,
    width: 300,
    margin: 8,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ff781f",
    borderRadius: 6,
    height: 42,
    width: 150,
    padding: 10,
    margin: 8
  }, 
  textButton: {
    fontWeight: '700',
  }
});
