// import { StatusBar } from 'expo-status-bar';
import {
  /* PixelRatio, */ StyleSheet,
  // Text,
  View,
  // TouchableOpacity,
  // Alert,
} from 'react-native';

// import { Link } from 'expo-router';

// PixelRatio.get() will show you how many pixel is per unit of measurement
// in your device

import { theme } from '../theme';
import { ShoppingListItem } from '../components/ShoppingListItem';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Link
        href="/counter"
        style={{
          textAlign: 'center',
          marginBottom: 18,
          fontSize: 24,
        }}
      >
        Go to /counter
      </Link> */}
      <ShoppingListItem isCompleted={false} name="Coffee" />
      <ShoppingListItem isCompleted name="Tea" />
      <ShoppingListItem isCompleted={true} name="Milk" />
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
