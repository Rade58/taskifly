import { StatusBar } from 'expo-status-bar';
import { PixelRatio, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

// PixelRatio.get() will show you how many pixel is per unit of measurement
// in your device

import { theme } from './theme';

export default function App() {
  const handleDelete = () => {
    Alert.alert('Are you sure you want to delete this?', 'It will be gone for good', [
      { text: 'Yes', onPress: () => console.log('Ok, deleting.'), style: 'destructive' },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity
          // onPress={() => console.log('Delete?')}
          onPress={handleDelete}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        {/* <Text>{PixelRatio.get()}</Text> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row', //column is default
    backgroundColor: theme.colorWhite,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  // -------------------------------
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 200,
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
