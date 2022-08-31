import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native';
import { Alert } from 'react-native';
import { Image } from 'react-native';
export default function App() {
 const [text,setText] = useState('');
  const buttonPressed = () => {
    Alert.alert("Button pressed")
  }

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center'}}>
      <TextInput
      keyboardType='numeric'
      style= {{borderColor: 'gray', borderWidth: 1, width: 200}}
      onChangeText={text => {
        console.log(text);
        setText(text);
      }}
      value={text}
      />
      <Button onPress={buttonPressed} title="Press me" />
      </View>
      <Image 
      style={{width: 250, height: 100}}
      source={{uri: 'https://www.sttinfo.fi/data/images/00816/5b5ec726-9f04-4277-9a06-ce2f2b1aeed2-w_300_h_100.png' }}
      />
      <Text>This is text!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
