import { useState } from 'react';
import { Image, StyleSheet, Platform, Button, View, TextInput, Text } from 'react-native';


export default function HomeScreen() {
  const [text, onChangeText] = useState('https://reactnative.dev/movies.json');
  const [webData, setWebData] = useState('');
  const request = new XMLHttpRequest();

  const _handlePressBtnAsync = () => {
    request.onreadystatechange = e => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log('test');
        console.log('sucess, ' + request.responseText);
        setWebData('Status: ' + request.status + ' ' + request.statusText + ' ' + request.responseText + ' ' + request.response);
      } else {
        console.warn('error');
        setWebData('Error: ' + request.status + ' ' + request.statusText + ' ' + request.responseText + ' ' + request.response);
      }
    }
    request.open('GET', text);
    request.send();
  }

  return (
    <View style={styles.containerColumn}>
      <View style={styles.containerRow}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder='Enter URL'
          value={text} />
        <Button
          title='Click me'
          onPress={() => _handlePressBtnAsync()} />
      </View>
      <Text style={styles.text}>{webData}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 40
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    justifyContent: 'center',
    borderBottomColor: 'blue',
    borderWidth: 1,
    width: 200,
    color: 'blue'
  },
  text: {
    color: 'blue'
  }
});
