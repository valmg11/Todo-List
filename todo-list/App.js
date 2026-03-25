import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
// import { CheckBox } from '@rneui/themed';

let data = ["Tsuki", "Mashiro", "Niko", "Yo-Chan","Katsunori"];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Awesome Seals</Text>
      <FlatList
      data={data}
      renderItem={({item}) => <Text>{item}</Text>}
      keyExtractor={(index) => index.toString()}
      />
      <StatusBar style="auto" />
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
});
