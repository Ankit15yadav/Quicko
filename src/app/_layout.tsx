import PageHeader from '@src/components/page-header';
import { fontFamily } from '@src/constants/fonts';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
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
  const { dismissAll, push } = useRouter()
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
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='(main)/select-location' options={{
          headerShown: true,
          header: () => <PageHeader name='Select Location' backFn={() => {
            dismissAll();
            push('/(modals)/delivery-location')
          }} />
        }} />
        <Stack.Screen name='(modals)/delivery-location' options={{ headerShown: false, presentation: 'formSheet', sheetGrabberVisible: false, sheetAllowedDetents: [0.85] }} />
      </Stack>
      <StatusBar style="auto" />
    </GestureHandlerRootView>

  );
}

