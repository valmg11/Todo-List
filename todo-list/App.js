import { StatusBar } from 'expo-status-bar';
import {useState, useCallback} from 'react';
import { StyleSheet, Text, View, FlatList, Button} from 'react-native';
import { TextInput } from 'react-native-web';
import { CheckBox } from '@rneui/themed';

let data = ["Tsuki", "Mashiro", "Niko", "Yo-Chan","Katsunori"];


export default function App() {
  const [isSelected, setIsSelected] = useState(false);

  // let addMenuItem = useCallback(() => {
  //   console.log("added")
  //   setMenuItems([newMenuItem, ...menuItems])
  // }, [newMenuItem, menuItems])

  let [counter, setCounter] = useState(0);

  const [text, setText] = useState('');


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

    <View style={styles.checkboxContainer}>
      <Text style={styles.header}>Awesome Seals</Text>
      <FlatList
      data={data}
      renderItem={({item}) => <Text>{item}</Text>}
      keyExtractor={(index) => index.toString()}
      />

      <CheckBox
        title="Clean room"
        checked={isSelected}
        onPress={() => setIsSelected(!isSelected)}
      />
      {/* <CheckBox
        title="Do homework"
        checked={isSelected}
        onPress={() => setIsSelected(!isSelected)}
      /> */}
      {/* <CheckBox
        value={isSelected}
        onValueChange={setSelected}
      /> */}
      <Text style={styles.label}>Do you like React Native?</Text>
    </View>
    <Text>Is CheckBox selected: {isSelected ? '👍Cleaned' : '👎Not cleaned'}</Text>

      <TextInput 
      placeholder="Add todo item..."
      onChangeText={newText => setText(newText)}
      defaultValue={text}
      style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
          marginBottom: 40,
          background: 'white',
        }}
      />
      
      <Text>Counter {counter}</Text>


      <Button title="count" style={[styles.button]}
        onPress={() => {setCounter(counter +1), console.log("count")}}
        color="red"></Button>

        <Button title="add" style={[styles.button]}
        onPress={() => {
          console.log("addItem", {text})}}
        color="blue"></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
