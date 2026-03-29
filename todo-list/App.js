import { StatusBar } from "expo-status-bar";
import { useState, useCallback } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { TextInput } from "react-native-web";
import { CheckBox } from "@rneui/themed";

let nextKey = 0;

export default function App() {
  let list = [
    {
      description: "Do dishes",
      key: 1,
    },
    {
      description: "Buy groceries",
      key: 2,
    },
    {
      description: "Clean room",
      key: 3,
    },
  ];
  const [isSelected, setIsSelected] = useState(false);

  // let addMenuItem = useCallback(() => {
  //   console.log("added")
  //   setMenuItems([newMenuItem, ...menuItems])
  // }, [newMenuItem, menuItems])

  let [counter, setCounter] = useState(0);

  const [text, setText] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.container}></View>
      <Text>To-Do List</Text>
      <View style={styles.checkboxContainer}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View>
              <CheckBox
                title={item.description}
                checked={isSelected}
                onPress={() => setIsSelected(!isSelected)}
              />
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
        {/* <Text style={styles.header}>Awesome Seals</Text>
      <FlatList
      data={data}
      renderItem={({data}) => <Text>{data.description}</Text>}
      keyExtractor={(index) => index.toString()}
      /> */}

        {/* <CheckBox
          title="Clean room"
          checked={isSelected}
          onPress={() => setIsSelected(!isSelected)}
        /> */}

        {/* <CheckBox
        value={isSelected}
        onValueChange={setSelected}
      /> */}
      </View>
      <Text>
        Is CheckBox selected: {isSelected ? "👍" : "👎"}
      </Text>

      <TextInput
        placeholder="Add todo item..."
        onChangeText=""
        defaultValue={text}
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
          marginBottom: 40,
          background: "white",
        }}
      />

      <Text>Counter {counter}</Text>

      <Button
        title="count"
        style={[styles.button]}
        onPress={() => {
          (setCounter(counter + 1), console.log("count"));
        }}
        color="red"
      ></Button>

      <Button
        title="add"
        style={[styles.button]}
        onPress={() => {
          console.log("item added:", { text }, [...list]);
        }}
        color="blue"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  header: {
    fontSize: 25,
    fontFamily: "sans-serif",
  },
  button: {
    marginBottom: 100,
  },
});
