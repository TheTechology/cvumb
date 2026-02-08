import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>Field Inspection Demo</Text>
      <View style={{ marginTop: 12 }}>
        <Text>• Checklist rapid</Text>
        <Text>• Poze + localizare</Text>
        <Text>• Semnătură digitală</Text>
      </View>
    </SafeAreaView>
  );
}
