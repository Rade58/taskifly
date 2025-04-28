import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { theme } from '../theme';
import { AntDesign, Entypo } from '@expo/vector-icons';

type Props = {
  name: string;
  isCompleted: boolean;
};

export function ShoppingListItem({ name, isCompleted }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}`,
      'It will be gone for good',
      [
        {
          text: 'Yes',
          onPress: () => console.log('Ok, deleting.'),
          style: 'destructive',
        },
        { text: 'Cancel', style: 'cancel' },
      ],
    );
  };

  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <View style={styles.row}>
        <Entypo
          name={isCompleted ? 'check' : 'circle'}
          color={isCompleted ? theme.colorGray : theme.colorRed}
        />
        <Text
          style={[
            styles.itemText,
            isCompleted ? styles.completedText : undefined,
          ]}
        >
          {name}
        </Text>
      </View>
      <TouchableOpacity
        // style={[styles.button, isCompleted ? styles.completedButton : undefined]}
        onPress={handleDelete}
        // activeOpacity={0.8}
        hitSlop={20}
      >
        {/* <Text style={styles.buttonText}>Delete</Text> */}
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGray : theme.colorRed}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 18,
    paddingHorizontal: 8,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 200,
    marginLeft: 8,
    flex: 1,
  },
  /* button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  }, */
  completedContainer: {
    backgroundColor: theme.colorLightGray,
    borderBottomColor: theme.colorLightGray,
  },
  completedText: {
    color: theme.colorGray,
    textDecorationLine: 'line-through',
    textDecorationColor: theme.colorGray,
  },
  /* completedButton: {
    backgroundColor: theme.colorGray,
  }, */

  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
});
