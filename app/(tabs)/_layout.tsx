import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      {/* Stackとはアプリ内の画面間を移動するための基盤 */}
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="about" options={{ title: "About" }} />
    </Tabs>
  );
}
