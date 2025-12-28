import PageHeader from '@src/components/page-header';
import { fontFamily } from '@src/constants/fonts';
import Provider from '@src/provider';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

// SplashScreen.setOptions({
//   duration: 1000,
//   fade: true,
// })

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { dismissAll, push } = useRouter()
  const [loaded, error] = useFonts({
    [fontFamily.BlueBubble]: require("../assets/font/WorkSans.ttf")
  })

  if (error) {
    // To show the app error screen
    return null;
  }

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync()
  //   }
  // }, [loaded])

  return (
    <Provider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='(main)/select-location' options={{
            headerShown: true,
            header: () => <PageHeader name='Confirm map pin location' backFn={() => {
              dismissAll();
              push('/(modals)/delivery-location')
            }} />
          }} />
          <Stack.Screen name='(modals)/delivery-location' options={{ headerShown: false, presentation: 'formSheet', sheetGrabberVisible: false, sheetAllowedDetents: [0.85] }} />
          <Stack.Screen name='(modals)/add-address' options={{ headerShown: false, presentation: 'formSheet', sheetGrabberVisible: true, sheetAllowedDetents: [0.5] }} />
        </Stack>
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </Provider>

  );
}

