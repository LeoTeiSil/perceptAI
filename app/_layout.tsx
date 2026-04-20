import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router'; // Mudamos de Drawer para Stack aqui
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* Dica de ouro: O Root Layout usa 'Stack' para apenas carregar o grupo (tabs).
          O seu menu lateral (Drawer) DE VERDADE é o que está dentro da pasta (tabs).
      */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}