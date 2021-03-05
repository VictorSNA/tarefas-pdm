import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [message, setMessage] = useState("");
  const [contatos, setContatos] = useState(new Map());

  const capturarNome = (nome) => {
    setNome(nome);
    console.log("Nome capturado " + nome);
  }
  const capturarNumero = (numero) => {
    setNumero(numero);
    console.log("Numero capturado " + numero);
  }
  const addContato = () => {
    setMessage("");
    setContatos(contatos => {
      if (contatos.get(nome)) {
        setMessage("Contato atualizado!")
      }else{
        setMessage("Contato criado com sucesso!")
      }
      console.log(nome + " - " + numero + " salvo com sucesso");
      return new Map([...contatos, [nome, numero]])
    }
    )
  }

  return (
    <View style={styles.container}>
    <View>
    <View>
    <Text>{message}</Text>
    </View>

    <View style={styles.textInput}>
      <TextInput
      placeholder="Nome do contato..."
      onChangeText={capturarNome}

      />
    </View>
    <View style={styles.textInput}>
      <TextInput
    placeholder="NÃºmero contato..."
    onChangeText={capturarNumero}
    selectTextOnFocus="false"
    />
    </View>

    <View>
    <Button
    title="Adicionar contato"
    onPress={addContato}
    color="#003300"

    />
    </View>
    </View>
    <View>
    <Text>Lista de contatos</Text>
    {
      Array.from(contatos).map(([nome, numero]) => (
        <View key={numero}>
        <Text>{nome} {numero}</Text>
        </View>
        )
        )
      }
      </View>
      </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
      },
      title: {
        fontSize: 32
      },
      textInput: {
        width: 200,
        paddingVertical: 5,
        borderWidth: 2,
        marginVertical: 2,
        borderRadius: 10,
      },
      button: {

      }
    });
