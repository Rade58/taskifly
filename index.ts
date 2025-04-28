// import { registerRootComponent } from 'expo';  // don't need it in case of expo-router

// this file is now app/index.ts
// import App from './App'; // moved because of expo-router

// no need this in case of expo-router
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);

// must be at the end of the file
// this approach is used in case where you would use some
// native libraries before expo-router is initialized
// (we are not doing this but I used this approach anyways)

import 'expo-router/entry';
// so I changed entry point (main) in package.json to be
// "main": "expo-router/entry"
// instead of
// "main": "index.ts"
