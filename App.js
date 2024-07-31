import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { createClient } from "@dynamic-labs/client";
import { useReactiveClient } from "@dynamic-labs/react-hooks";
import { ReactNativeExtension } from "@dynamic-labs/react-native-extension";

const dynamic = createClient({
  environmentId: "--- env id ---",
}).extend(ReactNativeExtension());

const useDynamic = () => useReactiveClient(dynamic);

export default function App() {
  return (
    <>
      <dynamic.reactNative.WebView />

      <View style={styles.container}>
        <Text>Open up App to start working on your app!</Text>
        <StatusBar style="auto" />

        <Button title="open auth" onPress={() => dynamic.ui.auth.show()} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
