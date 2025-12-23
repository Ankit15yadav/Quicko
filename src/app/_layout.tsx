import { fontFamily } from '@src/constants/fonts';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
})

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    [fontFamily.BlueBubble]: require("../assets/font/WorkSans.ttf")
  })

  if (error) {
    // To show the app error screen
    return null;
  }

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='delivery-location' options={{ headerShown: false, presentation: 'formSheet', sheetGrabberVisible: false, sheetAllowedDetents: [0.8] }} />
      </Stack>
      <StatusBar style="auto" />
    </GestureHandlerRootView>

  );
}

