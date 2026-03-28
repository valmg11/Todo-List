import { StatusBar } from "expo-status-bar";
import { useState, useCallback } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { TextInput } from "react-native-web";
import { CheckBox } from "@rneui/themed";

let nextId = 0;

export default function App() {
  let boo =[]
  let list = [
    {
      name: "Tsuki",
      id: 1,
    },
    {
      name: "Mashiro",
      id: 2,
    },
    {
      name: "Niko",
      id: 3,
    },
    {
      name: "Kroshik",
      id: 4,
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
      <View style={styles.checkboxContainer}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View>
              <CheckBox
                title={item.name}
                checked={isSelected}
                onPress={() => setIsSelected(!isSelected)}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        {/* <Text style={styles.header}>Awesome Seals</Text>
      <FlatList
      data={data}
      renderItem={({data}) => <Text>{data.name}</Text>}
      keyExtractor={(index) => index.toString()}
      /> */}

        <CheckBox
          title="Clean room"
          checked={isSelected}
          onPress={() => setIsSelected(!isSelected)}
        />

        {/* <CheckBox
        value={isSelected}
        onValueChange={setSelected}
      /> */}
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text>
        Is CheckBox selected: {isSelected ? "👍Cleaned" : "👎Not cleaned"}
      </Text>

      <TextInput
        placeholder="Add todo item..."
        onChangeText={(event) => setText(event.target.defaultValue)}
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
          setArtists([...artists, { id: nextId++, text: text }]);
          console.log("addItem", { text }, [...data]);
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
