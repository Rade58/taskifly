import { MaterialIcons } from '@expo/vector-icons';
import { Stack, Link } from 'expo-router';
import { theme } from '../../theme';
import { Pressable } from 'react-native';

export default function CounterLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Counter',
          headerRight: () => {
            return (
              <Link href="/counter/history" asChild>
                <Pressable hitSlop={20}>
                  <MaterialIcons
                    name="history"
                    size={32}
                    color={theme.colorGray}
                  />
                </Pressable>
              </Link>
            );
          },
        }}
      />
      <Stack.Screen name="history" options={{ title: 'History' }} />
    </Stack>
  );
}
