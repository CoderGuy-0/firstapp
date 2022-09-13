import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native';
import { Alert } from 'react-native';
import { Image } from 'react-native';


export default function App() {
  


 const [ival, setIval] = useState(0);
 const [value1, setValue1] = useState('');
 const [value2, setValue2] = useState('');
 const [data, setData] = useState([{ name: 'History'}]);



 const handlePlusInput = () => { 
  let tmp = parseInt(value1) + parseInt(value2);
  setIval(tmp);
  setData([...data, { name: value1 + ' + ' + value2 + ' = ' + tmp}]);
};

const handleMinusInput = () => {
  let tmp = parseInt(value1) - parseInt(value2);
  setIval(tmp);
  setData([...data, { name: value1 + ' - ' + value2 + ' = ' + tmp}]);
};


  return (


    
    <View style={styles.container}>
      <Text>Result: {ival}</Text>
      <View style={{ }}>
      <TextInput
      
      type="number"
      placeholder="0"
      value={ival}
      keyboardType='numeric'
      style= {{borderColor: 'gray', borderWidth: 1, width: 200}}
      onChangeText= {text => setValue1(text)}
      
      />
      <TextInput
      type="number"
      placeholder="0"
      value={ival}
      keyboardType='numeric'
      style= {{borderColor: 'gray', borderWidth: 1, width: 200}}
      onChangeText= {text => setValue2(text)}
      
      />
      </View>
      <View style={styles.fixToText}>
        <Button
          title="+"
          onPress={() => handlePlusInput()}
          
          
        />
        
        <Button
          title="-"
          onPress={() => handleMinusInput()}
        />


      </View>
      <View style={styles.flatStyle}>
    <FlatList
keyExtractor={(item, index) => index.toString()}
data={data}
renderItem={({ item }) => <Text>{item.name}</Text>}
  />
  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  fixToText: {
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: 80,
    height: 30,
  },
  flatStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: 80,
  }
});
