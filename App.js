import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { db } from './src/config/firebaseconfig';
import { collection, addDoc, doc, setDoc, getDoc, updateDoc, deleteDoc, deleteField } from "firebase/firestore";


const App = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Create
  const adicionar = () => {
    addDoc(collection(db, "usuarios"), 
    //setDoc(doc(db, "usuarios", '1'),
    {
      nome: nome,
      email: email,
      senha: senha
    })
    .then( () => {
      console.log("Usuário cadastrado com sucesso!")
    })
    .catch(error => {
      console.log(error);
  })
  setNome('');
  setEmail('');
  setSenha('');
}

  // Read
  const ver = () => {
    const docRef = doc(db, "usuarios", "1");
    const dados = getDoc(docRef)
    .then((doc) => {
      if (doc.exists) {
        console.log("Dados: ", doc.data())
      } else {
        console.log("Erro");
    }})
    .catch(error => {
      console.log(error);
    })
  }

  // Update
  const atualizar = () => {
    updateDoc(doc(db, "usuarios", '1'), 
    {
      senha: senha
    })
    .then( () => {
      console.log("Atualizado com sucesso!")
    })
    .catch(error => {
      console.log(error);
    })
  }

  // Delete
  const deletar = () => {
    deleteDoc(doc(db, "usuarios", '70kUE60Zcdx9GfU2OnpJ'))
    //const ref = doc(db, "usuarios", "YHRcL6My4BjH97388g1u");
    //updateDoc(ref, {
      //email: deleteField()
    //})
    .then( () => {
      console.log("Deletado  com sucesso!")
    })
    .catch(error => {
      console.log(error);
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
      <TouchableOpacity
        style={styles.button}
        onPress={atualizar}>
            <Text style={styles.textButton}>Atualizar</Text>
      </TouchableOpacity>  
      <TouchableOpacity
        style={styles.button}
        onPress={deletar}>
            <Text style={styles.textButton}>Deletar</Text>
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
