import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [goldenNumbers, setGoldenNumbers] = useState([]);
  const sortNumbers = () => {
    var possibleNumbers = [...Array(61).keys()];
    possibleNumbers.shift();
    var selectedNumbers = Array(6).fill(null);
    
    for(var i=0; i < 6; i++) {
      var number = possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)];
      selectedNumbers[i] = number;
      const index = possibleNumbers.indexOf(number);
      if (index > -1) {
        possibleNumbers.splice(index, 1);
      }
    }
    
    setGoldenNumbers(selectedNumbers);
  }
  
  return (
    <View style={styles.container}>
    <Button title="Gerar números"
    onPress={sortNumbers}
    />
    {
      goldenNumbers.map((goldenNumber) => (
        <View style={styles.mostrarNumero} key={goldenNumber}>
        <Text>{goldenNumber}</Text>
        </View>
        )
        )
      }
      </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      mostrarNumero: {
        backgroundColor: '#87CEFA',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3%',
        fontSize: 30,
        paddingHorizontal: '13%',
        borderRadius: 10,
        marginTop: '2%'
      },
    });