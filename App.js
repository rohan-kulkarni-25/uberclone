import React from "react";

// React Native Imports
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Provider - Redux
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={{}}>
      <View style={styles.container}>
        <Text style={{ fontWeight: "700", fontSize: 42 }}>BUILD UBER</Text>
        <StatusBar style='auto' />
      </View>
    </Provider>
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
