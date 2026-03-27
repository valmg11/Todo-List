import { StatusBar } from 'expo-status-bar';
import React, {useState, useCallback} from 'react';
import { StyleSheet, Text, View, FlatList, Button} from 'react-native';
import { TextInput } from 'react-native-web';
// import { CheckBox } from '@rneui/themed';

let data = ["Tsuki", "Mashiro", "Niko", "Yo-Chan","Katsunori"];

export default function App() {
  let [newMenuItem, setNewMenuItem] = useState("");
  let [menuItems, setMenuItems] = useState("");

  let addMenuItem = useCallback(() => {
    console.log("added")
    setMenuItems([newMenuItem, ...menuItems])
  }, [newMenuItem, menuItems])

  let [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Awesome Seals</Text>
      <FlatList
      data={data}
      renderItem={({item}) => <Text>{item}</Text>}
      keyExtractor={(index) => index.toString()}
      />
      <StatusBar style="auto" />


      <TextInput 
      placeholder="Add todo item..."
      style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
          marginBottom: 40,
        }}
      />
      
      <Text>Counter {counter}</Text>
      <Button title="hi" style={[styles.button]}
        onPress={() => {setCounter(counter +1), console.log("count")}}
        color="red"></Button>

        <Button title="add" style={[styles.button]}
        onPress={() => {
          addMenuItem(), 
          console.log("addItem")}}
        color="blue"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  header: {
    fontSize: 25,
    fontFamily: 'sans-serif',
  },
  button: {
    marginBottom: 100,
  },
});
