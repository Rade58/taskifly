import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'pink',
          paddingHorizontal: 8,
          // width: 100,
          // height: 100,
        }}
      >
        <Text>Здраво Свете. Šta radiš danas?</Text>
      </View>
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
  },
});
