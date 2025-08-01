import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="modals/imageModal" options={{
                  presentation: "modal", headerShown: false,
                  title: "Image-Test", contentStyle: { backgroundColor: "transparent" },
                  headerTitleStyle: { fontSize: 22, fontWeight: "800" }, headerTitleAlign: "left"
                }} />
        <Stack.Screen name="modals/imageModal2" options={{
                  presentation: "modal", headerShown: false,
                  title: "Image-Test", contentStyle: { backgroundColor: "transparent" },
                  headerTitleStyle: { fontSize: 22, fontWeight: "800" }, headerTitleAlign: "left"
                }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
