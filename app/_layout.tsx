import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Stackとはアプリ内の画面間を移動するための基盤 */}
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
    </Stack>
  );
}
