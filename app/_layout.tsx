import { SplashScreen, Stack } from "expo-router";
import { tokenCache } from "@/lib/auth";
import { useCustomFonts } from "@/hooks/useCustomFonts";


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const loaded = useCustomFonts();
  if (!loaded) return null;



  return (
  
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(root)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
  );
}
