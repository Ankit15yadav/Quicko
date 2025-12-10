import { Stack } from 'expo-router';
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
})

export default function RootLayout() {

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="auto" />
    </>

  );
}
