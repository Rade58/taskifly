import { StatusBar } from 'expo-status-bar';
import { /* PixelRatio, */ StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

// PixelRatio.get() will show you how many pixel is per unit of measurement
// in your device

import { theme } from './theme';
import { ShoppingListItem } from './components/ShoppingListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" />
      <ShoppingListItem name="Milk" />
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
});
