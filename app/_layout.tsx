import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import { Stack, Tabs } from 'expo-router';
import { theme } from '../theme';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: theme.colorCerulean }}
      // screenOptions={{ tabBarActiveTintColor: 'red' }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Shopping List',
          tabBarIcon: ({ color, size }) => {
            return <Feather name="list" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: 'Counter',
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <AntDesign
                name="clockcircleo"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: 'Idea',
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesome5
                name="lightbulb"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tabs>
  );

  /* return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: 'Shopping List' }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: 'Counter',
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: 'Idea',
        }}
      />
    </Tabs>
  ); */

  /* return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Shopping List' }}
      />
      <Stack.Screen
        name="counter"
        options={{
          title: 'Counter',
          presentation: 'modal',
          animation: 'fade_from_bottom',
        }}
      />
      <Stack.Screen
        name="idea"
        options={{
          title: 'Idea',
          presentation: 'modal',
          animation: 'fade_from_bottom',
        }}
      />
    </Stack>
  ); */
}
